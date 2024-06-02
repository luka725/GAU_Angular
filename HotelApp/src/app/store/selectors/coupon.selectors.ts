import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { CouponState } from '../state/coupon.state';

export const selectCouponState = (state: AppState) => state.coupondata;

export const selectCoupon = createSelector(
    selectCouponState,
  (state: CouponState) => state.data
);

export const selectCouponLoading = createSelector(
    selectCouponState,
  (state: CouponState) => state.loading
);

export const selectCouponError = createSelector(
    selectCouponState,
  (state: CouponState) => state.error
);
