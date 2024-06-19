import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:44355/api/users';
  private tokenKey = 'authToken';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<boolean | Object> {
    return this.http.post<{ token: string, expiryDate: string }>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap(response => this.handleLoginSuccess(response)),
        catchError(this.handleError<boolean>('login', false))
      );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem('expiryDate');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    const expiryDate = localStorage.getItem('expiryDate');
    if (!token || !expiryDate) {
      return false;
    }
    // Check if token is expired
    return new Date(expiryDate) > new Date();
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private handleLoginSuccess(response: { token: string, expiryDate: string }): void {
    localStorage.setItem(this.tokenKey, response.token);
    localStorage.setItem('expiryDate', response.expiryDate);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`Error in ${operation}:`, error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
