import { Action } from '@ngrx/store';
import { type } from '../../shared';

export const ActionTypes = {
  S_GET_EVENT: type('[Event] S Get Event'),
  S_ADD_MEMBER: type('[Event] S Add Event Member'),
  S_ADD_ADMIN: type('[Event] S Add Event Admin'),
  S_REMOVE_MEMBER: type('[Event] S Remove Event Member'),
  S_REMOVE_ADMIN: type('[Event] S Remove Event Admin'),
  S_EDIT_EVENT: type('[Event] S Edit Event'),
  S_NEW_EVENT: type('[Event] S New Event'),

  L_GET_EVENT: type('[Event] L Get Event'),
  L_ADD_MEMBER: type('[Event] L Add Event Member'),
  L_ADD_ADMIN: type('[Event] L Add Event Admin'),
  L_REMOVE_MEMBER: type('[Event] L Remove Event Member'),
  L_REMOVE_ADMIN: type('[Event] L Remove Event Admin'),
  L_EDIT_EVENT: type('[Event] L Edit Event'),
  L_NEW_POST: type('[Event] L New Post'),
  L_LIKE_POST: type('[Event] L Like Post'),
  L_LIKE_COMMENT: type('[Event] L Like Comment'),
  L_LIKE_SUBCOMMENT: type('[Event] L Like SubComment'),
  L_POST_COMMENT: type('[Event] L Post Comment')
};

export class S_GetEventAction implements Action {
  type = ActionTypes.S_GET_EVENT;

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

export class S_EditEventAction implements Action {
  type = ActionTypes.S_EDIT_EVENT;

  constructor(public payload: GeoEvent) { }
}

export class S_NewEventAction implements Action {
  type = ActionTypes.S_NEW_EVENT;

  constructor(public payload: GeoEvent) { }
}

export class L_GetEventAction implements Action {
  type = ActionTypes.L_GET_EVENT;

  constructor(public payload: GeoEvent) { }
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

export class L_EditEventAction implements Action {
  type = ActionTypes.L_EDIT_EVENT;

  constructor(public payload: GeoEvent) { }
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
  S_GetEventAction |
  S_AddMemberAction |
  S_AddAdminAction |
  S_RemoveMemberAction |
  S_RemoveAdminAction |
  S_EditEventAction |
  S_NewEventAction |
  L_GetEventAction |
  L_AddMemberAction |
  L_AddAdminAction |
  L_RemoveMemberAction |
  L_RemoveAdminAction |
  L_EditEventAction |
  L_NewPostAction |
  L_LikePostAction |
  L_LikeCommentAction |
  L_LikeSubCommentAction |
  L_PostCommentAction;
