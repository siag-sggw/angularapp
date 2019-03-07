import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { UserState } from './user.reducer';

export interface AppState {
  user: UserState
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

export const getUserState = createFeatureSelector<UserState>('user');
