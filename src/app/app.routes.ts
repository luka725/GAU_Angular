import { Routes } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { CheckoutComponent } from './checkout/checkout.component';
export const routes: Routes = [
    { path: '', component: SliderComponent },
    { path: 'checkout', component: CheckoutComponent}
];