import { Action } from '@ngrx/store';
import { type } from '../shared/util';

export const ActionTypes = {
  S_GET_EVENT: type('S Get Event'),
  S_ADD_MEMBER: type('S Add Event Member'),
  S_ADD_ADMIN: type('S Add Event Admin'),
  S_REMOVE_MEMBER: type('S Remove Event Member'),
  S_REMOVE_ADMIN: type('S Remove Event Admin'),
  S_EDIT_EVENT: type('S Edit Event'),

  L_GET_EVENT: type('L Get Event'),
  L_ADD_MEMBER: type('L Add Event Member'),
  L_ADD_ADMIN: type('L Add Event Admin'),
  L_REMOVE_MEMBER: type('L Remove Event Member'),
  L_REMOVE_ADMIN: type('L Remove Event Admin'),
  L_EDIT_EVENT: type('L Edit Event')
};

export class S_GetEventAction implements Action {
  type = ActionTypes.S_GET_EVENT;

  constructor(public payload: ObjectId) { }
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
  type = ActionTypes.S_REMOVE_ADMIN;

  constructor(public payload: HttpPayload) { }
}

export class S_EditEventAction implements Action {
  type = ActionTypes.S_EDIT_EVENT;

  constructor(public payload: GeoEvent) { }
}



export class L_GetEventAction implements Action {
  type = ActionTypes.L_GET_EVENT;

  constructor(public payload: GeoEvent) { }
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
  type = ActionTypes.L_REMOVE_ADMIN;

  constructor(public payload: User) { }
}

export class L_EditEventAction implements Action {
  type = ActionTypes.L_EDIT_EVENT;

  constructor(public payload: GeoEvent) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = 
  S_GetEventAction |
  S_AddMemberAction |
  S_AddAdminAction |
  S_RemoveMemberAction |
  S_RemoveAdminAction |
  S_EditEventAction |
  L_GetEventAction |
  L_AddMemberAction |
  L_AddAdminAction |
  L_RemoveMemberAction |
  L_RemoveAdminAction |
  L_EditEventAction;