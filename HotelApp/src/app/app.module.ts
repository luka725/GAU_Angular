import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { ApiService } from './services/api-service/api.service';
import { bookingReducer } from './store/reducers/booking.reducers';
import { BookingEffects } from './store/effects/booking.effects';
import { couponReducer } from './store/reducers/coupon.reducers';
import { CouponsEffects } from './store/effects/coupon.effects';
import { RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CouponComponent } from './coupon/coupon.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    CouponComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ 
      bookingdata: bookingReducer,
      coupondata: couponReducer
     }),
    EffectsModule.forRoot([BookingEffects, CouponsEffects]),
    RouterModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
