import { Action } from '@ngrx/store';
import { type } from '../shared/util';

export const ActionTypes = {
  L_ADD_MEMBER: type('L Add Member'),
  L_ADD_ADMIN: type('L Add Admin'),
  L_REMOVE_MEMBER: type('L Remove Member'),
  L_REMOVE_ADMIN: type('L Remove Admin'),
  L_CHANGE_NAME: type('L Remove Admin'),
  S_ADD_MEMBER: type('S Add Member'),
  S_ADD_ADMIN: type('S Add Admin'),
  S_REMOVE_MEMBER: type('S Remove Member'),
  S_REMOVE_ADMIN: type('S Remove Admin'),
  S_CHANGE_NAME: type('S Remove Admin')
};

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
/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = 
  L_AddMemberAction| 
  L_AddAdminAction|
  L_RemoveMemberAction|
  L_RemoveAdminAction|
  S_AddMemberAction| 
  S_AddAdminAction|
  S_RemoveMemberAction|
  S_RemoveAdminAction;