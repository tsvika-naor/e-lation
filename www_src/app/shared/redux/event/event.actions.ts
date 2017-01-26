import { Action } from '@ngrx/store';
import { type } from '../shared/util';

export const ActionTypes = {
  S_ADD_MEMBER: type('SAdd Member'),
  S_ADD_ADMIN: type('SAdd Admin'),
  S_REMOVE_MEMBER: type('SRemove Member'),
  S_REMOVE_ADMIN: type('SRemove Admin'),
  S_EDIT_EVENT: type('SEdit Event'),

  L_ADD_MEMBER: type('LAdd Member'),
  L_ADD_ADMIN: type('LAdd Admin'),
  L_REMOVE_MEMBER: type('LRemove Member'),
  L_REMOVE_ADMIN: type('LRemove Admin'),
  L_EDIT_EVENT: type('LEdit Event')

};

export class S_AddMemberAction implements Action {
  type = ActionTypes.S_ADD_MEMBER;

  constructor(public payload: User) { }
}

export class S_AddAdminAction implements Action {
  type = ActionTypes.S_ADD_ADMIN;

  constructor(public payload: ObjectId) { }
}

export class S_RemoveMemberAction implements Action {
  type = ActionTypes.S_REMOVE_MEMBER;

  constructor(public payload: ObjectId) { }
}
export class S_RemoveAdminAction implements Action {
  type = ActionTypes.S_REMOVE_ADMIN;

  constructor(public payload: ObjectId) { }
}
export class SEditEventAction implements Action {
  type = ActionTypes.S_EDIT_EVENT;

  constructor(public payload: GeoEvent) { }
}



export class LAddMemberAction implements Action {
  type = ActionTypes.L_ADD_MEMBER;

  constructor(public payload: User) { }
}

export class LAddAdminAction implements Action {
  type = ActionTypes.L_ADD_ADMIN;

  constructor(public payload: ObjectId) { }
}

export class LRemoveMemberAction implements Action {
  type = ActionTypes.L_REMOVE_MEMBER;

  constructor(public payload: ObjectId) { }
}
export class LRemoveAdminAction implements Action {
  type = ActionTypes.L_REMOVE_ADMIN;

  constructor(public payload: ObjectId) { }
}
export class LEditEventAction implements Action {
  type = ActionTypes.L_EDIT_EVENT;

  constructor(public payload: GeoEvent) { }
}
/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = 
  AddMemberAction |
  AddAdminAction;