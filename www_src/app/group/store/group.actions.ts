import { Action } from '@ngrx/store';
import { type } from '../../shared/utils';

export const ActionTypes = {
  S_GET_GROUP: type('S Get Group'),
  S_ADD_MEMBER: type('S Add Group Member'),
  S_ADD_ADMIN: type('S Add Group Admin'),
  S_REMOVE_MEMBER: type('S Remove Group Member'),
  S_REMOVE_ADMIN: type('S Remove Group Admin'),
  S_UPDATE_GROUP: type('S Update Group'),
  S_NEW_GROUP: type('S New Group'),

  L_GET_GROUP: type('L Get Group'),
  L_ADD_MEMBER: type('L Add Group Member'),
  L_ADD_ADMIN: type('L Add Group Admin'),
  L_REMOVE_MEMBER: type('L Remove Group Member'),
  L_REMOVE_ADMIN: type('L Remove Group Admin'),
  L_UPDATE_GROUP: type('L Change Group Name')
};

export class S_GetGroupAction implements Action {
  type = ActionTypes.S_GET_GROUP;

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

export class S_UpdateGroupAction implements Action {
  type = ActionTypes.S_UPDATE_GROUP;

  constructor(public payload: Group) { }
}

export class S_NewGroupAction implements Action {
  type = ActionTypes.S_NEW_GROUP;

  constructor(public payload: Group) { }
}


export class L_GetGroupAction implements Action {
  type = ActionTypes.L_GET_GROUP;

  constructor(public payload: Group) { }
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

export class L_UpdateGroupAction implements Action {
  type = ActionTypes.L_UPDATE_GROUP;

  constructor(public payload: Group) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions =
  S_GetGroupAction |
  S_AddMemberAction |
  S_AddAdminAction |
  S_RemoveMemberAction |
  S_RemoveAdminAction |
  S_UpdateGroupAction |
  S_NewGroupAction |
  L_GetGroupAction |
  L_AddMemberAction |
  L_AddAdminAction |
  L_RemoveMemberAction |
  L_RemoveAdminAction |
  L_UpdateGroupAction;
