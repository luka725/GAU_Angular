import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api-service/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  userData = {
    email: 'user@example.com',
    password: 'password123',
    avatar: 'avatar-url',
    name: 'John Doe',
    phoneNumber: '1234567890',
    gender: 0
  };
  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      avatar: [''],
      name: ['', Validators.required],
      phoneNumber: [''],
      gender: ['0', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.apiService.registerUser(this.userData).subscribe({
        next: (response: any) => {
          console.log('Response from server:', response);
        },
        error: (error: any) => {
          console.error('Error:', error);
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
