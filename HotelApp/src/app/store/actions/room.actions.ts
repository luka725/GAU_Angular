import { createAction, props } from '@ngrx/store';

export const loadRooms = createAction(
  '[Rooms] Load Data',
  props<{ endpoint: string, id?: number }>()
);

export const loadRoomsSuccess = createAction(
  '[Rooms] Load Data Success',
  props<{ data: any }>()
);

export const loadRoomsFailure = createAction(
  '[Rooms] Load Data Failure',
  props<{ error: any }>()
);
