import { createAction, props } from '@ngrx/store';

export const loadCoupons = createAction(
  '[Coupons] Load Data',
  props<{ endpoint: string, id?: number }>()
);

export const loadCouponsSuccess = createAction(
  '[Coupons] Load Data Success',
  props<{ data: any }>()
);

export const loadCouponsFailure = createAction(
  '[Coupons] Load Data Failure',
  props<{ error: any }>()
);
