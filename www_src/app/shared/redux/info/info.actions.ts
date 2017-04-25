import { Action } from '@ngrx/store';
import { type } from '../shared/util';

export const ActionTypes = {
  S_GET_RESULTS: type('S Get Results'),
  L_UPDATE_RESULTS: type('L Update Results'),
  L_CLEAR_RESULTS: type('L Clear Results')
};

export class S_GetResultsAction implements Action {
  type = ActionTypes.S_GET_RESULTS;

  constructor(public payload: String) { }
}

export class L_UpdateResultsAction implements Action {
  type = ActionTypes.L_UPDATE_RESULTS;

  constructor(public payload: SearchResult) { }
}

export class L_ClearResultsAction implements Action {
  type = ActionTypes.L_CLEAR_RESULTS;

  constructor(public payload: any) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = 
  S_GetResultsAction |
  L_UpdateResultsAction |
  L_ClearResultsAction;