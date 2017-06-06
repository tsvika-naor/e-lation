import { Action } from '@ngrx/store';
import { type } from '../../shared/utils';

export const ActionTypes = {
  // Remote Actions => Effect
  GET_RESULTS: type('Get Results'),
  // Local Actions => Reducer
  CONFIG_PAGES: type('Configure Pages'),
  UPDATE_PAGES: type('Update Pages'),
  UPDATE_RESULTS: type('Update Results'),
  CLEAR_RESULTS: type('Clear Results')
};

export class GetResultsAction implements Action {
  type = ActionTypes.GET_RESULTS;

  constructor(public payload: String) { }
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

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions =
  GetResultsAction |
  ConfigPagesAction |
  UpdatePagesAction |
  UpdateResultsAction |
  ClearResultsAction;
