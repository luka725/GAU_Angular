import { BookingState } from './booking.state';
import { CouponState } from './coupon.state';
export interface AppState {
  bookingdata: BookingState,
  coupondata: CouponState
}
