import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UnifiedService } from '../unified.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: UnifiedService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    const expectedRole = next.data['expectedRole']; // Access 'expectedRole' using bracket notation

    if (this.authService.isLoggedIn()) {
      // Check if the route requires a specific role
      if (expectedRole) {
        if (!this.authService.hasRole(expectedRole)) {
          this.router.navigate(['/']); // Redirect to home or unauthorized page
          return false;
        }
      }
      return true; // Allow access to protected route
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false; // Redirect to login page if not logged in
    }
  }
}
