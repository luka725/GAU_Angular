import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'checkout', component:CheckoutFormComponent }
];
