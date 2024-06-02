import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from '../../services/api-service/api.service';
import { loadBookings, loadBookingsSuccess, loadBookingsFailure } from '../actions/booking.actions';

@Injectable()
export class BookingEffects {

    loadBookings$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadBookings),
            mergeMap(action =>
                // Call getItems method with the endpoint and ID from the action payload
                this.apiService.getItem(action.endpoint, action.id).pipe(
                    map(data => loadBookingsSuccess({ data })),
                    catchError(error => of(loadBookingsFailure({ error })))
                )
            )
        )
    );

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) { }
}
