import '@ngrx/core/src/add/operator/select';
import { Observable } from 'rxjs/Observable';
import { Actions, ActionTypes } from './info.actions';


export interface State {
  searchResults: SearchResult;
};

const initialState: State = {
  searchResults: {
    providers: [],
    users: [],
    groups: [],
    events: [],
    posts: []
  },
};

export function infoReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.L_UPDATE_RESULTS: {
      let newState = Object.apply({}, state);
      newState.searchResults = action.payload;
      return newState;
    }

    case ActionTypes.L_CLEAR_RESULTS: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}