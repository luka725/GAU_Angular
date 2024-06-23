import { Component, OnInit } from '@angular/core';
import { UnifiedService } from '../services/unified.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData: any;
  errorMessage: string | null = null;
  userRole: string = 'Unknown';

  constructor(private userService: UnifiedService) {}

  ngOnInit(): void {
    this.userService.user$.pipe(
      catchError(error => {
        console.error('Error fetching user data:', error);
        this.errorMessage = 'Failed to fetch user data. Please try again later.';
        return of(null); // Return an observable with default value
      })
    ).subscribe(data => {
      if (data) {
        this.userData = data;
        this.userRole = data.Roles?.RoleName || 'Unknown';
        console.log('User Role:', this.userRole);
      }
    });
  }

  logOut(): void {
    this.userService.logout();
  }
}
