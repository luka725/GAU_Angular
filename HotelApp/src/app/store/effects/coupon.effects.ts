import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from '../../services/api-service/api.service';
import { loadCoupons, loadCouponsSuccess, loadCouponsFailure } from '../actions/coupon.actions';

@Injectable()
export class CouponsEffects {

    loadCoupons$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadCoupons),
            mergeMap(action =>
                // Call getItems method with the endpoint and ID from the action payload
                this.apiService.getItem(action.endpoint, action.id).pipe(
                    map(data => loadCouponsSuccess({ data })),
                    catchError(error => of(loadCouponsFailure({ error })))
                )
            )
        )
    );

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) { }
}
