import { Action } from '@ngrx/store';
import { type } from '../../shared/utils';

export const ActionTypes = {
  S_GET_GROUP: type('[Group] S Get Group'),
  S_ADD_MEMBER: type('[Group] S Add Group Member'),
  S_ADD_ADMIN: type('[Group] S Add Group Admin'),
  S_REMOVE_MEMBER: type('[Group] S Remove Group Member'),
  S_REMOVE_ADMIN: type('[Group] S Remove Group Admin'),
  S_UPDATE_GROUP: type('[Group] S Update Group'),
  S_NEW_GROUP: type('[Group] S New Group'),

  L_GET_GROUP: type('[Group] L Get Group'),
  L_ADD_MEMBER: type('[Group] L Add Group Member'),
  L_ADD_ADMIN: type('[Group] L Add Group Admin'),
  L_REMOVE_MEMBER: type('[Group] L Remove Group Member'),
  L_REMOVE_ADMIN: type('[Group] L Remove Group Admin'),
  L_UPDATE_GROUP: type('[Group] L Change Group Name'),
  L_NEW_POST: type('[Group] L New Post'),
  L_LIKE_POST: type('[Group] L Like Post'),
  L_LIKE_COMMENT: type('[Group] L Like Comment'),
  L_LIKE_SUBCOMMENT: type('[Group] L Like SubComment'),
  L_POST_COMMENT: type('[Group] L Post Comment')
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

export class L_NewPostAction implements Action {
  type = ActionTypes.L_NEW_POST;

  constructor(public payload: Post) { }
}

export class L_LikePostAction implements Action {
  type = ActionTypes.L_LIKE_POST;

  constructor(public payload: Post) { }
}

export class L_LikeCommentAction implements Action {
  type = ActionTypes.L_LIKE_COMMENT;

  constructor(public payload: UserComment) { }
}

export class L_LikeSubCommentAction implements Action {
  type = ActionTypes.L_LIKE_SUBCOMMENT;

  constructor(public payload: UserComment) { }
}

export class L_PostCommentAction implements Action {
  type = ActionTypes.L_POST_COMMENT;

  constructor(public payload: UserComment) { }
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
  L_UpdateGroupAction |
  L_NewPostAction |
  L_LikePostAction |
  L_LikeCommentAction |
  L_LikeSubCommentAction |
  L_PostCommentAction;
