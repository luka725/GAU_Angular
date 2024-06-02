import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { SingleRoomState } from '../state/singleroom.state';

export const selectSignleRoomState = (state: AppState) => state.singleroomdata;

export const selectSingleRoom = createSelector(
    selectSignleRoomState,
  (state: SingleRoomState) => state.data
);

export const selectSingleRoomLoading = createSelector(
    selectSignleRoomState,
  (state: SingleRoomState) => state.loading
);

export const selectSingleRoomError = createSelector(
    selectSignleRoomState,
  (state: SingleRoomState) => state.error
);
