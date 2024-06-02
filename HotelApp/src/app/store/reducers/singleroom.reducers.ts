import { createReducer, on } from '@ngrx/store';
import { initialSingleRoomState, SingleRoomState } from '../state/singleroom.state';
import { loadSingleRooms, loadSingleRoomsSuccess, loadSingleRoomsFailure } from '../actions/singleroom.actions';
const _singleRoomReducer = createReducer(
    initialSingleRoomState,
  on(loadSingleRooms, state => ({ ...state, loading: true })),
  on(loadSingleRoomsSuccess, (state, { data }) => ({ ...state, data, loading: false })),
  on(loadSingleRoomsFailure, (state, { error }) => ({ ...state, error, loading: false }))
);

export function singleRoomReducer(state:any, action:any) {
  return _singleRoomReducer(state, action);
}
