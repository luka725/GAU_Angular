import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-customer-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './customer-login.component.html',
  styleUrl: './customer-login.component.css'
})
export class CustomerLoginComponent {

  constructor(private fb: FormBuilder) {}

  OnInit(){
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  loginForm:FormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })

  AuthorizeUser(){
    if(this.loginForm.valid){

    }else{
      console.log("xuxuni")
    }
  }

}
