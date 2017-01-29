import { Action } from '@ngrx/store';
import { type } from '../shared/util';

export const ActionTypes = {
  S_ADD_MEMBER: type('S Add Group Member'),
  S_ADD_ADMIN: type('S Add Group Admin'),
  S_REMOVE_MEMBER: type('S Remove Group Member'),
  S_REMOVE_ADMIN: type('S Remove Group Admin'),
  S_CHANGE_NAME: type('S Change Group Name'),

  L_ADD_MEMBER: type('L Add Group Member'),
  L_ADD_ADMIN: type('L Add Group Admin'),
  L_REMOVE_MEMBER: type('L Remove Group Member'),
  L_REMOVE_ADMIN: type('L Remove Group Admin'),
  L_CHANGE_NAME: type('L Change Group Name')
};

export class S_AddMemberAction implements Action {
  type = ActionTypes.S_ADD_MEMBER;

  constructor(public payload: HttpPayload) { }
}

export class S_AddAdminAction implements Action {
  type = ActionTypes.S_ADD_ADMIN;

  constructor(public payload: HttpPayload) { }
}

export class S_RemoveMemberAction implements Action {
  type = ActionTypes.S_REMOVE_MEMBER;

  constructor(public payload: HttpPayload) { }
}

export class S_RemoveAdminAction implements Action {
  type = ActionTypes.S_REMOVE_MEMBER;

  constructor(public payload: HttpPayload) { }
}

export class S_ChangeGroupName implements Action {
  type = ActionTypes.S_CHANGE_NAME;

  constructor(public payload: HttpPayload) { }
}

export class L_AddMemberAction implements Action {
  type = ActionTypes.L_ADD_MEMBER;

  constructor(public payload: User) { }
}

export class L_AddAdminAction implements Action {
  type = ActionTypes.L_ADD_ADMIN;

  constructor(public payload: User) { }
}

export class L_RemoveMemberAction implements Action {
  type = ActionTypes.L_REMOVE_MEMBER;

  constructor(public payload: User) { }
}

export class L_RemoveAdminAction implements Action {
  type = ActionTypes.L_REMOVE_MEMBER;

  constructor(public payload: User) { }
}

export class L_ChangeGroupName implements Action {
  type = ActionTypes.L_CHANGE_NAME;

  constructor(public payload: String) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = 
  S_AddMemberAction    | 
  S_AddAdminAction     |
  S_RemoveMemberAction |
  S_RemoveAdminAction  |
  L_AddMemberAction    | 
  L_AddAdminAction     |
  L_RemoveMemberAction |
  L_RemoveAdminAction;