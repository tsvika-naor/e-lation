import { Action } from '@ngrx/store';
import { type } from '../../shared/utils';

export const ActionTypes = {
  S_GET_FEED: type('[Feed] S Get Feed'),
  S_GET_POST: type('[Feed] S Get Post'),

  L_GET_FEED: type('[Feed] L Get Feed'),
  L_GET_POST: type('[Feed] L Get Post'),
  L_NEW_POST: type('[Feed] L New Post'),
  L_LIKE_POST: type('[Feed] L Like Post'),
  L_LIKE_COMMENT: type('[Feed] L Like Comment'),
  L_LIKE_SUBCOMMENT: type('[Feed] L Like SubComment'),
  L_POST_COMMENT: type('[Feed] L Post Comment')
};

export class S_GetFeedAction implements Action {
  type = ActionTypes.S_GET_FEED;

  constructor(public payload: ObjectId) { }
}

export class S_GetPostAction implements Action {
  type = ActionTypes.S_GET_POST;

  constructor(public payload: ObjectId) { }
}

export class L_GetFeedAction implements Action {
  type = ActionTypes.L_GET_FEED;

  constructor(public payload: Array<Post>) { }
}

export class L_GetPostAction implements Action {
  type = ActionTypes.L_GET_POST;

  constructor(public payload: Post) { }
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
  S_GetFeedAction |
  S_GetPostAction |
  L_GetFeedAction |
  L_GetPostAction |
  L_NewPostAction |
  L_LikePostAction |
  L_LikeCommentAction |
  L_LikeSubCommentAction |
  L_PostCommentAction;
