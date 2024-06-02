import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ApiService } from './services/api-service/api.service';
import { roomReducer } from './store/reducers/room.reducers';
import { RoomEffects } from './store/effects/room.effects';
import { bookingReducer } from './store/reducers/booking.reducers';
import { BookingEffects } from './store/effects/booking.effects';
import { couponReducer } from './store/reducers/coupon.reducers';
import { CouponsEffects } from './store/effects/coupon.effects';
import { RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CouponComponent } from './coupon/coupon.component';
import { RegistrationComponent } from './registration/registration.component';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    CouponComponent,
    RegistrationComponent,
    NavigationComponent,
    RoomsComponent,
    RoomDetailsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    StoreModule.forRoot({ 
      bookingdata: bookingReducer,
      coupondata: couponReducer,
      roomdata: roomReducer
     }),
    EffectsModule.forRoot([BookingEffects, CouponsEffects, RoomEffects]),
    RouterModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    })
  ],
  providers: [ApiService, DatePipe, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
