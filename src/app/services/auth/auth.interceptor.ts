import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = this.authService.getToken();

    if (authToken) {
      // Clone the request and add authorization header
      const authReq = request.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${authToken}`,
        }),
      });
      return next.handle(authReq);
    }

    // If no token, proceed with the original request
    return next.handle(request);
  }
}
