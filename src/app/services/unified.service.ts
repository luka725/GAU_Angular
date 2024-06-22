import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnifiedService {
  private apiUrl = 'https://localhost:44355/api';
  private tokenKey = 'authToken';
  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();
  private userInfoFetched = false;

  constructor(private http: HttpClient, private router: Router) {
    // Initialize user if token exists in localStorage
    const token = localStorage.getItem(this.tokenKey);
    if (token && !this.userInfoFetched) {
      this.getUserInfo().subscribe();
    }
  }

  // User-related methods

  getUserRole(): Observable<string> {
    return this.user$.pipe(
      map(user => {
        if (user && user.Roles) {
          return user.Roles.RoleName; // Assuming user has a single role stored in 'role' property
        }
        return 'Unknown'; // Return a default value if user or role is not available
      })
    );
  }

  getUserInfo(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/me`).pipe(
      tap((data) => {
        this.userSubject.next(data);
        this.userInfoFetched = true; // Store user data in BehaviorSubject
      }),
      catchError(this.handleError<any>('getUserInfo'))
    );
  }

  clearUserInfo(): void {
    this.userSubject.next(null);
  }

  getUser(): any {
    return this.userSubject.value;
  }

  hasRole(roleName: string): boolean {
    const user = this.getUser();
    if (user && user.roles) {
      return user.roles.includes(roleName);
    }
    return false;
  }

  // Authentication-related methods

  login(username: string, password: string): Observable<boolean | Object> {
    return this.http.post<{ Token: string, ExpiryDate: string }>(`${this.apiUrl}/users/login`, { username, password })
      .pipe(
        tap(response => {
          localStorage.setItem(this.tokenKey, response.Token);
          const expiryDate = new Date(response.ExpiryDate);
          localStorage.setItem('expiryDate', expiryDate.toISOString());
          this.getUserInfo().subscribe(); // Fetch user info after login
          const returnUrl = this.router.routerState.snapshot.root.queryParams['returnUrl'] || '/home';
          this.router.navigate([returnUrl]);
        }),
        catchError(this.handleError<boolean>('login', false))
      );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem('expiryDate');
    this.clearUserInfo();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Other service methods (example: roles, register, appointments)

  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users/roles`)
      .pipe(
        catchError(this.handleError<any[]>('getRoles', []))
      );
  }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users/register`, user);
  }

  getAppointments(params: any): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.set('doctorName', params.doctorName || '');
    queryParams = queryParams.set('patientName', params.patientName || '');
    queryParams = queryParams.set('appointmentType', params.appointmentType || '');
    queryParams = queryParams.set('paymentStatus', params.paymentStatus || '');
    queryParams = queryParams.set('page', params.page.toString());
    queryParams = queryParams.set('pageSize', params.pageSize.toString());

    return this.http.get<any>(`${this.apiUrl}/appointments`, { params: queryParams })
      .pipe(
        catchError(this.handleError<any>('getAppointments'))
      );
  }

  // Error handling method

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
