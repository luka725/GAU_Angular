import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { BookingState } from '../state/booking.state';

export const selectBookingState = (state: AppState) => state.bookingdata;

export const selectBooking = createSelector(
  selectBookingState,
  (state: BookingState) => state.data
);

export const selectBookingLoading = createSelector(
  selectBookingState,
  (state: BookingState) => state.loading
);

export const selectBookingError = createSelector(
  selectBookingState,
  (state: BookingState) => state.error
);
