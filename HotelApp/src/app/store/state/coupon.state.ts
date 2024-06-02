export interface CouponState {
    data: any[];
    loading: boolean;
    error: any;
  }
  
  export const initialCouponDataState: CouponState = {
    data: [],
    loading: false,
    error: null
  };
  