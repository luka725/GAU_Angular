import { BookingState } from './booking.state';
import { CouponState } from './coupon.state';
import { RoomState } from './room.state';
export interface AppState {
  bookingdata: BookingState,
  coupondata: CouponState,
  roomdata: RoomState
}
