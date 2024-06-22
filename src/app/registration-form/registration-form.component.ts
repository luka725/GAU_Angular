import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UnifiedService } from '../services/unified.service';
import { tap, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;
  roles!: any[];
  registrationSuccessMessage: string = '';
  registrationErrorMessage: string = '';


  constructor(private fb: FormBuilder, private unifiedService:UnifiedService) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      roleId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchRoles();
  }
  fetchRoles(): void {
    this.unifiedService.getRoles()
      .pipe(
        tap((roles) => {
          this.roles = roles; // Populate roles array with data from API
        }),
        catchError((error) => {
          console.error('Error fetching roles:', error);
          // Handle error as needed, e.g., display a message to the user
          return [];
        })
      )
      .subscribe();
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const user = {
        Username: this.registrationForm.get('username')?.value,
        Password: this.registrationForm.get('password')?.value,
        FirstName: this.registrationForm.get('firstName')?.value,
        LastName: this.registrationForm.get('lastName')?.value,
        Email: this.registrationForm.get('email')?.value,
        PhoneNumber: this.registrationForm.get('phoneNumber')?.value,
        RoleId: this.registrationForm.get('roleId')?.value
      };
      console.log(user)
      this.unifiedService.registerUser(user).subscribe(
        () => {
          this.registrationSuccessMessage = `User ${user.FirstName} ${user.LastName} registered successfully.`;
          this.registrationErrorMessage = '';
          this.registrationForm.reset();
          Object.keys(this.registrationForm.controls).forEach(key => {
            this.registrationForm.get(key)?.setErrors(null);
          });
        },
        (error) => {
          console.error('Error registering user:', error);
          this.registrationSuccessMessage = '';
          this.registrationErrorMessage = 'Failed to register user. Please try again.';
        }
      );
    } else {
      // Form not valid, mark all fields as touched to display errors
      this.registrationForm.markAllAsTouched();
    }
  }
}
