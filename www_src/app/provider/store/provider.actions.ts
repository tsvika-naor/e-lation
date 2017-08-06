import { Action } from '@ngrx/store';
import { type } from '../../shared/utils';

export const ActionTypes = {
  S_GET_PROVIDER: type('[Provider] S Get Provider'),
  S_ADD_REVIEW: type('[Provider] S Add Review'),
  S_EDIT_REVIEW: type('[Provider] S Edit Review'),
  S_DELETE_REVIEW: type('[Provider] S Delete Review'),
  S_FOLLOW_USER: type('[Provider] S Follow User'),
  S_UNFOLLOW_USER: type('[Provider] S Unfollow User'),

  L_GET_PROVIDER: type('[Provider] L Get Provider'),
  L_ADD_REVIEW: type('[Provider] L Add Review'),
  L_EDIT_REVIEW: type('[Provider] L Edit Review'),
  L_DELETE_REVIEW: type('[Provider] L Delete Review'),
  L_FOLLOW_USER: type('[Provider] L Follow User'),
  L_UNFOLLOW_USER: type('[Provider] L Unfollow User'),
  L_NEW_POST: type('[Provider] L New Post'),
  L_LIKE_POST: type('[Provider] L Like Post'),
  L_LIKE_COMMENT: type('[Provider] L Like Comment'),
  L_LIKE_SUBCOMMENT: type('[Provider] L Like SubComment'),
  L_POST_COMMENT: type('[Provider] L Post Comment')
};

export class S_GetProviderAction implements Action {
  type = ActionTypes.S_GET_PROVIDER;

  constructor(public payload: ObjectId) { }
}

export class S_AddReviewAction implements Action {
  type = ActionTypes.S_ADD_REVIEW;

  constructor(public payload: HttpPayload) { }
}

export class S_EditReviewAction implements Action {
  type = ActionTypes.S_EDIT_REVIEW;

  constructor(public payload: HttpPayload) { }
}

export class S_DeleteReviewAction implements Action {
  type = ActionTypes.S_DELETE_REVIEW;

  constructor(public payload: ObjectId) { }
}

export class S_FollowUserAction implements Action {
  type = ActionTypes.S_FOLLOW_USER;

  constructor(public payload: HttpPayload) { }
}

export class S_UnfollowUserAction implements Action {
  type = ActionTypes.S_UNFOLLOW_USER;

  constructor(public payload: HttpPayload) { }
}

export class L_GetProviderAction implements Action {
  type = ActionTypes.L_GET_PROVIDER;

  constructor(public payload: Provider) { }
}

export class L_AddReviewAction implements Action {
  type = ActionTypes.L_ADD_REVIEW;

  constructor(public payload: Provider) { }
}

export class L_EditReviewAction implements Action {
  type = ActionTypes.L_EDIT_REVIEW;

  constructor(public payload: Provider) { }
}

export class L_DeleteReviewAction implements Action {
  type = ActionTypes.L_DELETE_REVIEW;

  constructor(public payload: Provider) { }
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
  S_GetProviderAction |
  S_AddReviewAction   |
  S_EditReviewAction   |
  S_DeleteReviewAction   |
  S_FollowUserAction |
  S_UnfollowUserAction |
  L_GetProviderAction |
  L_AddReviewAction |
  L_EditReviewAction |
  L_DeleteReviewAction |
  L_FollowUserAction |
  L_UnfollowUserAction |
  L_NewPostAction |
  L_LikePostAction |
  L_LikeCommentAction |
  L_LikeSubCommentAction |
  L_PostCommentAction;
