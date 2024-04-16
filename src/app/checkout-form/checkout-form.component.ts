import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';
import { MarketService } from '../../services/market.service';

@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, CartComponent],
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.css'
})
export class CheckoutFormComponent {
  constructor (private fb:FormBuilder, private market:MarketService){}
  OnInit(){
    this.checkoutForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      zip: ['', Validators.required],
      email: ['', Validators.required]
    })
  }
  checkoutForm:FormGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    country: new FormControl(""),
    city: new FormControl(""),
    province: new FormControl(""),
    zip: new FormControl(""),
    email: new FormControl(""),
  })
  onSubmit(){
    if(this.checkoutForm.valid){
      window.alert('Order Placed Scesfully');
      this.market.clearCart()
      console.log(this.checkoutForm.value)
    }else{
      window.alert('Please fill al the fields');
    }
  }
}
