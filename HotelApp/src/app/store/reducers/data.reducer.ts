import { createReducer, on } from '@ngrx/store';
import { loadData, loadDataSuccess, loadDataFailure } from '../actions/data.actions';
import { DataState, initialDataState } from '../state/data.state';

const _dataReducer = createReducer(
  initialDataState,
  on(loadData, state => ({ ...state, loading: true })),
  on(loadDataSuccess, (state, { data }) => ({ ...state, data, loading: false })),
  on(loadDataFailure, (state, { error }) => ({ ...state, error, loading: false }))
);

export function dataReducer(state:any, action:any) {
  return _dataReducer(state, action);
}
