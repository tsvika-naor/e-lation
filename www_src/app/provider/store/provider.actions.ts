import { Action } from '@ngrx/store';
import { type } from '../../shared/utils';

export const ActionTypes = {
  TOGGLE_CONTACT: type('Toggle Contact'),
  S_GET_PROVIDER: type('S Get Provider'),
  S_ADD_REVIEW: type('S Add Review'),
  S_EDIT_REVIEW: type('S Edit Review'),
  S_DELETE_REVIEW: type('S Delete Review'),
  L_GET_PROVIDER: type('L Get Provider'),
  L_ADD_REVIEW: type('L Add Review'),
  L_EDIT_REVIEW: type('L Edit Review'),
  L_DELETE_REVIEW: type('L Delete Review')
};

export class ToggleContactAction implements Action {
  type = ActionTypes.TOGGLE_CONTACT;

  constructor(public payload: undefined) { }
}

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

  constructor(public payload: Review) { }
}

export class S_DeleteReviewAction implements Action {
  type = ActionTypes.S_DELETE_REVIEW;

  constructor(public payload: ObjectId) { }
}

export class L_GetProviderAction implements Action {
  type = ActionTypes.L_GET_PROVIDER;

  constructor(public payload: Provider) { }
}

export class L_AddReviewAction implements Action {
  type = ActionTypes.L_ADD_REVIEW;

  constructor(public payload: Review) { }
}

export class L_EditReviewAction implements Action {
  type = ActionTypes.L_EDIT_REVIEW;

  constructor(public payload: Review) { }
}

export class L_DeleteReviewAction implements Action {
  type = ActionTypes.L_DELETE_REVIEW;

  constructor(public payload: ObjectId) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions =
  ToggleContactAction |
  S_GetProviderAction |
  S_AddReviewAction   |
  S_EditReviewAction   |
  S_DeleteReviewAction   |
  L_GetProviderAction |
  L_AddReviewAction |
  L_EditReviewAction |
  L_DeleteReviewAction;
