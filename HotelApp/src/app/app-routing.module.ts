import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CouponComponent } from './coupon/coupon.component';
import { RegistrationComponent } from './registration/registration.component';
import { RoomsComponent } from './rooms/rooms.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', component: RoomsComponent},
  { path: 'booking', component: BookingComponent },
  { path: 'coupon', component: CouponComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
