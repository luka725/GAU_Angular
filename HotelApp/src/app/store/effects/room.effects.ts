import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from '../../services/api-service/api.service';
import { loadRooms, loadRoomsSuccess, loadRoomsFailure } from '../actions/room.actions';

@Injectable()
export class RoomEffects {

    loadRooms$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadRooms),
            mergeMap(action =>
                // Call getItems method with the endpoint and ID from the action payload
                this.apiService.getItem(action.endpoint, action.id).pipe(
                    map(data => loadRoomsSuccess({ data })),
                    catchError(error => of(loadRoomsFailure({ error })))
                )
            )
        )
    );

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) { }
}
