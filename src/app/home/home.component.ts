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
    this.fetchUserData();
    this.userService.getUserRole().subscribe(
      role => {
        this.userRole = role;
        console.log('User Role:', this.userRole);
      },
      error => {
        console.error('Error fetching user role:', error);
      }
    );
  }
  logOut():void{
    this.userService.logout();
  }
  fetchUserData(): void {
    this.userService.getUserInfo().pipe(
      catchError(error => {
        console.error('Error fetching user data:', error);
        this.errorMessage = 'Failed to fetch user data. Please try again later.';
        return of(null); // Return a null observable to end the observable chain
      })
    ).subscribe(data => {
      if (data) {
        this.userData = data;
      }
    });
  }
}
