import { Action } from '@ngrx/store';
import { type } from '../../shared/utils';

export const ActionTypes = {
  // Remote Actions => Effect
  GET_RESULTS: type('Get Results'),
  // Local Actions => Reducer
  ADD_PROVIDER: type('Add Provider'),
  ADD_GROUP: type('Add Group'),
  ADD_EVENT: type('Add Event'),
  REMOVE_PROVIDER: type('Remove Provider'),
  REMOVE_GROUP: type('Remove Group'),
  REMOVE_EVENT: type('Remove Event'),
  CONFIG_PAGES: type('Configure Pages'),
  UPDATE_PAGES: type('Update Pages'),
  UPDATE_RESULTS: type('Update Results'),
  CLEAR_RESULTS: type('Clear Results'),
  // TEST ONLY
  GET_LINKS: type('Get Links')
};

export class GetResultsAction implements Action {
  type = ActionTypes.GET_RESULTS;

  constructor(public payload: String) { }
}

export class AddProviderAction implements Action {
  type = ActionTypes.ADD_PROVIDER;

  constructor(public payload: Provider) { }
}

export class AddGroupAction implements Action {
  type = ActionTypes.ADD_GROUP;

  constructor(public payload: Group) { }
}

export class AddEventAction implements Action {
  type = ActionTypes.ADD_EVENT;

  constructor(public payload: Event) { }
}

export class RemoveProviderAction implements Action {
  type = ActionTypes.REMOVE_PROVIDER;

  constructor(public payload: ObjectId) { }
}

export class RemoveGroupAction implements Action {
  type = ActionTypes.REMOVE_GROUP;

  constructor(public payload: ObjectId) { }
}

export class RemoveEventAction implements Action {
  type = ActionTypes.REMOVE_EVENT;

  constructor(public payload: ObjectId) { }
}

export class ConfigPagesAction implements Action {
  type = ActionTypes.CONFIG_PAGES;

  constructor(public payload: UserPages) { }
}

export class UpdatePagesAction implements Action {
  type = ActionTypes.UPDATE_PAGES;

  constructor(public payload: UserPages) { }
}

export class UpdateResultsAction implements Action {
  type = ActionTypes.UPDATE_RESULTS;

  constructor(public payload: SearchResult) { }
}

export class ClearResultsAction implements Action {
  type = ActionTypes.CLEAR_RESULTS;

  constructor(public payload: any) { }
}

// TEST ONLY
export class GetLinksAction implements Action {
  type = ActionTypes.GET_LINKS;

  constructor(public payload: ObjectId) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions =
  GetResultsAction |
  AddProviderAction |
  AddGroupAction |
  AddEventAction |
  RemoveProviderAction |
  RemoveGroupAction |
  RemoveEventAction |
  ConfigPagesAction |
  UpdatePagesAction |
  UpdateResultsAction |
  ClearResultsAction |
  // TEST ONLY
  GetLinksAction;
