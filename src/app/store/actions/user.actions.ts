import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export enum UserActionTypes {
  LoginUser = 'Login User',
  LogoutUser = 'Logout User'
}

export class LoginUser implements Action {
  readonly type = UserActionTypes.LoginUser;

  constructor(public payload: User) {};
}

export class LogoutUser implements Action {
  readonly type = UserActionTypes.LogoutUser
}

export type UserActions = LoginUser | LogoutUser;
