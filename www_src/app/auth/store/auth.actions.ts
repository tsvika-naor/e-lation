import { Action } from '@ngrx/store';
import { type } from '../../shared/utils';

export const ActionTypes = {
  AUTH_SUCCESS: type('Auth Success'),
  AUTH_FAIL: type('Auth Fail'),
  LOAD_USER_DATA: type('Load User Data'),
  SAVE_USER_ID: type('Save User ID'),
  SAVE_USER: type('Save User'),
  LOAD_USER: type('Load User'),
  TOGGLE_ACTION: type('Toggle Action'),
  REGISTER: type('Register'),
  LOGIN: type('Login'),
  LOGOUT: type('Logout')
};

export class AuthSuccessAction implements Action {
  type = ActionTypes.AUTH_SUCCESS;

  constructor(public payload: ObjectId) { }
}

export class AuthFailAction implements Action {
  type = ActionTypes.AUTH_FAIL;

  constructor(public payload: Error) { }
}

export class LoadUserDataAction implements Action {
  type = ActionTypes.LOAD_USER_DATA;

  constructor(public payload: {user: User, links: UserPages}) { }
}

export class SaveUserIdAction implements Action {
  type = ActionTypes.SAVE_USER_ID;

  constructor(public payload: ObjectId) { }
}

export class SaveUserAction implements Action {
  type = ActionTypes.SAVE_USER;

  constructor(public payload: User) { }
}

export class LoadUserAction implements Action {
  type = ActionTypes.LOAD_USER;

  constructor(public payload: User) { }
}

export class ToggleActionAction implements Action {
  type = ActionTypes.TOGGLE_ACTION;

  constructor(public payload: any) { }
}

export class RegisterAction implements Action {
  type = ActionTypes.REGISTER;

  constructor(public payload: any) { }
}

export class LoginAction implements Action {
  type = ActionTypes.LOGIN;

  constructor(public payload: any) { }
}

export class LogoutAction implements Action {
  type = ActionTypes.LOGOUT;

  constructor(public payload: any) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions =
  AuthSuccessAction |
  AuthFailAction |
  LoadUserDataAction |
  SaveUserIdAction |
  SaveUserAction |
  LoadUserAction |
  ToggleActionAction |
  RegisterAction |
  LoginAction |
  LogoutAction;
