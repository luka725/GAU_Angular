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
    const token = localStorage.getItem(this.tokenKey);
    if (token && !this.userInfoFetched) {
      this.fetchUserData().subscribe();
    }
  }

  private fetchUserData(): Observable<any> {
    if (!this.userInfoFetched) {
      return this.http.get<any>(`${this.apiUrl}/users/me`).pipe(
        tap(response => {
          this.userSubject.next(response);
          this.userInfoFetched = true;
        }),
        catchError(this.handleError<any>('fetchUserData'))
      );
    } else {
      return this.user$;
    }
  }

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
    return this.user$;
  }

  clearUserInfo(): void {
    this.userSubject.next(null);
  }

  getUser(): any {
    return this.userSubject.value;
  }

  hasRole(roleName: string): boolean {
    const user = this.getUser();
    return user?.Roles?.RoleName === roleName;
  }

  login(username: string, password: string): Observable<boolean | Object> {
    return this.http.post<{ Token: string, ExpiryDate: string }>(`${this.apiUrl}/users/login`, { username, password })
      .pipe(
        tap(response => {
          localStorage.setItem(this.tokenKey, response.Token);
          const expiryDate = new Date(response.ExpiryDate);
          localStorage.setItem('expiryDate', expiryDate.toISOString());
          this.fetchUserData().subscribe();
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
    queryParams = queryParams.set('page', params.page);
    queryParams = queryParams.set('pageSize', params.pageSize);

    return this.http.get<any>(`${this.apiUrl}/appointments`, { params: queryParams })
      .pipe(
        catchError(this.handleError<any>('getAppointments'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
