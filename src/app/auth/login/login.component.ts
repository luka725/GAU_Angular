import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UnifiedService } from '../../services/unified.service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage!: string;

  constructor(private fb: FormBuilder, private authService: UnifiedService, private router: Router) {}

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
            this.errorMessage = 'Network error occurred. Please try again later.';
          } else if (error.status === 401) {
            this.errorMessage = 'Invalid username or password. Please try again.';
          } else {
            this.errorMessage = `Error ${error.status}: ${error.message}`;
          }
          return of(null); // Return a null observable to end the observable chain
        })
      ).subscribe(success => {
        if (success) {
          this.router.navigate(['/home']);
        }
      });
    }
  }
}
