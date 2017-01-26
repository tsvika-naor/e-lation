import { Action } from '@ngrx/store';
import { type } from '../shared/util';

export const ActionTypes = {
  S_USER_UPDATE: type('User Update'),
  L_USER_UPDATE: type('User Update')
};

export class S_UserUpdateAction implements Action {
  type = ActionTypes.S_USER_UPDATE;

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
  S_UserUpdateAction |
  L_UserUpdateAction;
