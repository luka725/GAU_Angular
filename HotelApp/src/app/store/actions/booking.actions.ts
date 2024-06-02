import { createAction, props } from '@ngrx/store';

export const loadBookings = createAction(
  '[Booking] Load Data',
  props<{ endpoint: string, id?: number }>()
);

export const loadBookingsSuccess = createAction(
  '[Booking] Load Data Success',
  props<{ data: any }>()
);

export const loadBookingsFailure = createAction(
  '[Booking] Load Data Failure',
  props<{ error: any }>()
);
