import { createReducer, on } from '@ngrx/store';
import { loadBookings, loadBookingsSuccess, loadBookingsFailure } from '../actions/booking.actions';
import { BookingState, initialBookingDataState } from '../state/booking.state';

const _bookingReducer = createReducer(
  initialBookingDataState,
  on(loadBookings, state => ({ ...state, loading: true })),
  on(loadBookingsSuccess, (state, { data }) => ({ ...state, data, loading: false })),
  on(loadBookingsFailure, (state, { error }) => ({ ...state, error, loading: false }))
);

export function bookingReducer(state:any, action:any) {
  return _bookingReducer(state, action);
}
