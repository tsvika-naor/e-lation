import { Action } from '@ngrx/store';
import { type } from '../../shared/utils';

export const ActionTypes = {
  S_NEW_POST: type('S New Post'),
  S_LIKE_POST: type('S Like Post'),
  S_LIKE_COMMENT: type('S Like Comment'),
  S_LIKE_SUBCOMMENT: type('S Like SubComment'),
  S_POST_COMMENT: type('S Post Comment')
};

export class S_NewPostAction implements Action {
  type = ActionTypes.S_NEW_POST;

  constructor(public payload: GenericAction) { }
}

export class S_LikePostAction implements Action {
  type = ActionTypes.S_LIKE_POST;

  constructor(public payload: GenericAction) { }
}

export class S_LikeCommentAction implements Action {
  type = ActionTypes.S_LIKE_COMMENT;

  constructor(public payload: GenericAction) { }
}

export class S_LikeSubCommentAction implements Action {
  type = ActionTypes.S_LIKE_SUBCOMMENT;

  constructor(public payload: GenericAction) { }
}

export class S_PostCommentAction implements Action {
  type = ActionTypes.S_POST_COMMENT;

  constructor(public payload: GenericAction) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions =
  S_NewPostAction |
  S_LikePostAction |
  S_LikeCommentAction |
  S_LikeSubCommentAction |
  S_PostCommentAction;
