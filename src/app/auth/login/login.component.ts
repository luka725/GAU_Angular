import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage!: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
            // Client-side error
            this.errorMessage = 'Network error occurred. Please try again later.';
          } else if (error.status === 401) {
            // Unauthorized - Invalid credentials
            this.errorMessage = 'Invalid username or password. Please try again.';
          } else {
            // Other errors
            this.errorMessage = `Error ${error.status}: ${error.message}`;
          }
          throw error; // Rethrow the error to propagate it downstream
        })
      ).subscribe(() => {
        this.router.navigate(['/home']);
        console.log("yeaa")
      });
    } else {
      // Form validation failed, handle as needed (optional)
    }
  }
}
