import { Action } from '@ngrx/store';
import { type } from '../../shared/utils';

export const ActionTypes = {
  S_GET_USER: type('S Get User'),
  S_USER_UPDATE: type('S User Update'),
  S_NEW_USER: type('S New User'),

  L_GET_USER: type('L Get User'),
  L_USER_UPDATE: type('L User Update')
};

export class S_GetUserAction implements Action {
  type = ActionTypes.S_GET_USER;

  constructor(public payload: ObjectId) { }
}

export class S_UserUpdateAction implements Action {
  type = ActionTypes.S_USER_UPDATE;

  constructor(public payload: User) { }
}

export class S_NewUserAction implements Action {
  type = ActionTypes.S_NEW_USER;

  constructor(public payload: User) { }
}

export class L_GetUserAction implements Action {
  type = ActionTypes.L_GET_USER;

  constructor(public payload: User) { }
}

export class L_UserUpdateAction implements Action {
  type = ActionTypes.L_USER_UPDATE;

  constructor(public payload: User) { }
}
/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions =
  S_GetUserAction |
  S_UserUpdateAction |
  S_NewUserAction |
  L_GetUserAction |
  L_UserUpdateAction;
