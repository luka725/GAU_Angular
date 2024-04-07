import { Component } from '@angular/core';
import { CustomerLoginComponent } from '../customer-login/customer-login.component';
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CustomerLoginComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

}
