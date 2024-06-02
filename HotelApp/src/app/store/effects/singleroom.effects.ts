import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from '../../services/api-service/api.service';
import { loadSingleRooms, loadSingleRoomsSuccess, loadSingleRoomsFailure } from '../actions/singleroom.actions';

@Injectable()
export class SingleRoomEffects {

    loadRooms$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadSingleRooms),
            mergeMap(action =>
                // Call getItems method with the endpoint and ID from the action payload
                this.apiService.getItem(action.endpoint, action.id).pipe(
                    map(data => loadSingleRoomsSuccess({ data })),
                    catchError(error => of(loadSingleRoomsFailure({ error })))
                )
            )
        )
    );

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) { }
}
