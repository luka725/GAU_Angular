import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/state/app.state';
import { selectCoupon, selectCouponError, selectCouponLoading } from '../store/selectors/coupon.selectors';
import { loadCoupons } from '../store/actions/coupon.actions';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrl: './coupon.component.css'
})
export class CouponComponent implements OnInit {
  coupons$!: Observable<any[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.coupons$ = this.store.select(selectCoupon);
    this.loading$ = this.store.select(selectCouponLoading);
    this.error$ = this.store.select(selectCouponError);

    this.store.dispatch(loadCoupons({ endpoint: 'coupon/getall' }));
  }
}
