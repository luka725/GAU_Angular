import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UnifiedService } from '../unified.service';

@Injectable({
  providedIn: 'root'
})
export class AuthNotGuard implements CanActivate {

  constructor(private authService: UnifiedService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
      return false; // Redirect to home page if already logged in
    }
    return true; // Allow access to login page if not logged in
  }
}
