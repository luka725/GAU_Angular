import { createReducer, on } from '@ngrx/store';
import { CouponState, initialCouponDataState } from '../state/coupon.state';
import { loadCoupons, loadCouponsSuccess, loadCouponsFailure } from '../actions/coupon.actions';

const _couponReducer = createReducer(
    initialCouponDataState,
  on(loadCoupons, state => ({ ...state, loading: true })),
  on(loadCouponsSuccess, (state, { data }) => ({ ...state, data, loading: false })),
  on(loadCouponsFailure, (state, { error }) => ({ ...state, error, loading: false }))
);

export function couponReducer(state:any, action:any) {
  return _couponReducer(state, action);
}
