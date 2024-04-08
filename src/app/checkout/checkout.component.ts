import { Component } from '@angular/core';
import { CustomerLoginComponent } from '../customer-login/customer-login.component';
import { DetailsComponent } from '../details/details.component';
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CustomerLoginComponent, DetailsComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

}
