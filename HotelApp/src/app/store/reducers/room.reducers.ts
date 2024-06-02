import { createReducer, on } from '@ngrx/store';
import { RoomState, initialRoomState } from '../state/room.state';
import { loadRooms, loadRoomsSuccess, loadRoomsFailure } from '../actions/room.actions';
const _roomReducer = createReducer(
    initialRoomState,
  on(loadRooms, state => ({ ...state, loading: true })),
  on(loadRoomsSuccess, (state, { data }) => ({ ...state, data, loading: false })),
  on(loadRoomsFailure, (state, { error }) => ({ ...state, error, loading: false }))
);

export function roomReducer(state:any, action:any) {
  return _roomReducer(state, action);
}
