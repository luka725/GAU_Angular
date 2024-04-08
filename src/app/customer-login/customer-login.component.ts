import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-customer-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './customer-login.component.html',
  styleUrl: './customer-login.component.css'
})
export class CustomerLoginComponent {
  currentUser:any;
  constructor(private fb: FormBuilder, private service: ProductService) {}

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
      this.currentUser = this.service.getUser(this.loginForm.value.email, this.loginForm.value.password)
      console.log(this.currentUser.id)
      this.service.setDetails(this.currentUser.id)
    }else{
      console.log("xuxuni")
    }
  }

}
