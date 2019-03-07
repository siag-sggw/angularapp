import { Action, State } from '@ngrx/store';
import { UserActionTypes, LoginUser, UserActions } from '../actions/user.actions';
import { state } from '@angular/animations';
import { User } from 'src/app/models/user.model';


export interface UserState {
 user: User
 isLogged: boolean
}

export const initialState: UserState = {
  user: null,
  isLogged: false
};

export function userReducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {

    case UserActionTypes.LoginUser: {
      console.log(action.payload)
      return {
        ...state,
        user: action.payload,
        isLogged: true
      }
    };

    case UserActionTypes.LogoutUser: {
      return {
        ...state,
        isLogged: false}
    }

    default:
      return state;
  }
}
