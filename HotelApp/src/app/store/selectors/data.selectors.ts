import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { DataState } from '../state/data.state';

export const selectDataState = (state: AppState) => state.data;

export const selectData = createSelector(
  selectDataState,
  (state: DataState) => state.data
);

export const selectLoading = createSelector(
  selectDataState,
  (state: DataState) => state.loading
);

export const selectError = createSelector(
  selectDataState,
  (state: DataState) => state.error
);
