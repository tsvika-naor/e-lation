import { Action } from '@ngrx/store';
import { type } from '../shared/util';

export const ActionTypes = {
  S_GET_FEED: type('S Get Feed'),
  S_LIKE_POST: type('S Like Post'),
  S_LIKE_COMMENT: type('S Like Comment'),
  S_LIKE_SUBCOMMENT: type('S Like SubComment'),
  S_POST_COMMENT: type('S Post Comment'),

  L_GET_FEED: type('L Get Feed'),
  L_LIKE_POST: type('L Like Post'),
  L_LIKE_COMMENT: type('L Like Comment'),
  L_LIKE_SUBCOMMENT: type('L Like SubComment'),
  L_POST_COMMENT: type('L Post Comment')
};

export class S_GetFeedAction implements Action {
  type = ActionTypes.S_GET_FEED;

  constructor(public payload: any) { }
}

export class S_LikePostAction implements Action {
  type = ActionTypes.S_LIKE_POST;

  constructor(public payload: ObjectId) { }
}

export class S_LikeCommentAction implements Action {
  type = ActionTypes.S_LIKE_COMMENT;

  constructor(public payload: ObjectId) { }
}

export class S_LikeSubCommentAction implements Action {
  type = ActionTypes.S_LIKE_SUBCOMMENT;

  constructor(public payload: ObjectId) { }
}

export class S_PostCommentAction implements Action {
  type = ActionTypes.S_POST_COMMENT;

  constructor(public payload: UserComment) { }
}

export class L_GetFeedAction implements Action {
  type = ActionTypes.L_GET_FEED;

  constructor(public payload: Array<Post>) { }
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
  S_LikePostAction |
  S_LikeCommentAction |
  S_LikeSubCommentAction |
  S_PostCommentAction |
  L_LikePostAction |
  L_LikeCommentAction |
  L_LikeSubCommentAction |
  L_PostCommentAction;