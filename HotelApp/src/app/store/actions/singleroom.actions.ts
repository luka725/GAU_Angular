import { createAction, props } from '@ngrx/store';

export const loadSingleRooms = createAction(
  '[SingleRooms] Load Data',
  props<{ endpoint: string, id?: number }>()
);

export const loadSingleRoomsSuccess = createAction(
  '[SingleRooms] Load Data Success',
  props<{ data: any }>()
);

export const loadSingleRoomsFailure = createAction(
  '[SingleRooms] Load Data Failure',
  props<{ error: any }>()
);
