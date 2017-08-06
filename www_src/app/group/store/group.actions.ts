import { Action } from '@ngrx/store';
import { type } from '../../shared/utils';

export const ActionTypes = {
  S_GET_GROUP: type('[Group] S Get Group'),
  S_UPDATE_GROUP: type('[Group] S Update Group'),
  S_NEW_GROUP: type('[Group] S New Group'),
  S_ADD_MEMBER: type('[Group] S Add Member'),
  S_REMOVE_MEMBER: type('[Group] S Remove Member'),
  S_PROMOTE_ADMIN: type('[Group] S Promote Admin'),
  S_REVOKE_ADMIN: type('[Group] S Revoke Admin'),
  S_REMOVE_ADMIN: type('[Group] S Remove Admin'),

  L_GET_GROUP: type('[Group] L Get Group'),
  L_UPDATE_GROUP: type('[Group] L Change Group Name'),
  L_ADD_MEMBER: type('[Group] L Add Member'),
  L_REMOVE_MEMBER: type('[Group] L Remove Member'),
  L_PROMOTE_ADMIN: type('[Group] L Promote Admin'),
  L_REVOKE_ADMIN: type('[Group] L Revoke Admin'),
  L_REMOVE_ADMIN: type('[Group] L Remove Admin'),
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

export class S_UpdateGroupAction implements Action {
  type = ActionTypes.S_UPDATE_GROUP;

  constructor(public payload: Group) { }
}

export class S_NewGroupAction implements Action {
  type = ActionTypes.S_NEW_GROUP;

  constructor(public payload: Group) { }
}

export class S_AddMemberAction implements Action {
  type = ActionTypes.S_ADD_MEMBER;

  constructor(public payload: HttpPayload) { }
}

export class S_RemoveMemberAction implements Action {
  type = ActionTypes.S_REMOVE_MEMBER;

  constructor(public payload: HttpPayload) { }
}

export class S_PromoteAdminAction implements Action {
  type = ActionTypes.S_PROMOTE_ADMIN;

  constructor(public payload: HttpPayload) { }
}

export class S_RevokeAdminAction implements Action {
  type = ActionTypes.S_REVOKE_ADMIN;

  constructor(public payload: HttpPayload) { }
}

export class S_RemoveAdminAction implements Action {
  type = ActionTypes.S_REMOVE_ADMIN;

  constructor(public payload: HttpPayload) { }
}

export class L_GetGroupAction implements Action {
  type = ActionTypes.L_GET_GROUP;

  constructor(public payload: Group) { }
}

export class L_AddMemberAction implements Action {
  type = ActionTypes.L_ADD_MEMBER;

  constructor(public payload: User) { }
}

export class L_RemoveMemberAction implements Action {
  type = ActionTypes.L_REMOVE_MEMBER;

  constructor(public payload: User) { }
}

export class L_PromoteAdminAction implements Action {
  type = ActionTypes.L_PROMOTE_ADMIN;

  constructor(public payload: User) { }
}

export class L_RevokeAdminAction implements Action {
  type = ActionTypes.L_REVOKE_ADMIN;

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
  S_UpdateGroupAction |
  S_NewGroupAction |
  S_AddMemberAction |
  S_RemoveMemberAction |
  S_PromoteAdminAction |
  S_RevokeAdminAction |
  S_RemoveAdminAction |
  L_GetGroupAction |
  L_UpdateGroupAction |
  L_AddMemberAction |
  L_RemoveMemberAction |
  L_PromoteAdminAction |
  L_RevokeAdminAction |
  L_RemoveAdminAction |
  L_NewPostAction |
  L_LikePostAction |
  L_LikeCommentAction |
  L_LikeSubCommentAction |
  L_PostCommentAction;
