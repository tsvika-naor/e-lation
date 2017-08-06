import { Action } from '@ngrx/store';
import { type } from '../../shared/utils';

export const ActionTypes = {
  S_GET_USER: type('[User] S Get User'),
  S_USER_UPDATE: type('[User] S User Update'),
  S_NEW_USER: type('[User] S New User'),
  S_FOLLOW_USER: type('[User] S Follow User'),
  S_UNFOLLOW_USER: type('[User] S Unfollow User'),

  L_GET_USER: type('[User] L Get User'),
  L_USER_UPDATE: type('[User] L User Update'),
  L_NEW_USER: type('[User] L New User'),
  L_FOLLOW_USER: type('[User] L Follow User'),
  L_UNFOLLOW_USER: type('[User] L Unfollow User'),
  L_NEW_POST: type('[User] L New Post'),
  L_LIKE_POST: type('[User] L Like Post'),
  L_LIKE_COMMENT: type('[User] L Like Comment'),
  L_LIKE_SUBCOMMENT: type('[User] L Like SubComment'),
  L_POST_COMMENT: type('[User] L Post Comment')
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

export class S_FollowUserAction implements Action {
  type = ActionTypes.S_FOLLOW_USER;

  constructor(public payload: HttpPayload) { }
}

export class S_UnfollowUserAction implements Action {
  type = ActionTypes.S_UNFOLLOW_USER;

  constructor(public payload: HttpPayload) { }
}

export class L_GetUserAction implements Action {
  type = ActionTypes.L_GET_USER;

  constructor(public payload: User) { }
}

export class L_UserUpdateAction implements Action {
  type = ActionTypes.L_USER_UPDATE;

  constructor(public payload: User) { }
}

export class L_NewUserAction implements Action {
  type = ActionTypes.L_NEW_USER;

  constructor(public payload: {id: ObjectId, links: UserPages}) { }
}

export class L_FollowUserAction implements Action {
  type = ActionTypes.L_FOLLOW_USER;

  constructor(public payload: User) { }
}

export class L_UnfollowUserAction implements Action {
  type = ActionTypes.L_UNFOLLOW_USER;

  constructor(public payload: User) { }
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
  S_GetUserAction |
  S_UserUpdateAction |
  S_NewUserAction |
  S_FollowUserAction |
  S_UnfollowUserAction |
  L_GetUserAction |
  L_UserUpdateAction |
  L_NewUserAction |
  L_FollowUserAction |
  L_UnfollowUserAction |
  L_NewPostAction |
  L_LikePostAction |
  L_LikeCommentAction |
  L_LikeSubCommentAction |
  L_PostCommentAction;
