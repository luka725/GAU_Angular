import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { CouponState } from '../state/coupon.state';
import { RoomState } from '../state/room.state';

export const selectRoomState = (state: AppState) => state.roomdata;

export const selectRoom = createSelector(
    selectRoomState,
  (state: RoomState) => state.data
);

export const selectRoomLoading = createSelector(
    selectRoomState,
  (state: RoomState) => state.loading
);

export const selectRoomError = createSelector(
    selectRoomState,
  (state: RoomState) => state.error
);
