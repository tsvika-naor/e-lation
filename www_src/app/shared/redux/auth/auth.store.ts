import '@ngrx/core/src/add/operator/select';
import { Observable } from 'rxjs/Observable';
import { Actions, ActionTypes } from './auth.actions';


export interface State {
  token: string;
  authenticated: boolean;
  newUser: boolean;
  err: Error;
};

const initialState: State = {
  token: null,
  authenticated: false,
  newUser: false,
  err: null
};

export function authReducer (state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.AUTH_SUCCESS: {
      return {
        token: action.payload,
        authenticated: true,
        newUser: state.newUser,
        err: null
      };
    }

    case ActionTypes.AUTH_FAIL: {
      return {
        token: null,
        authenticated: false,
        newUser: state.newUser,
        err: action.payload
      };
    }

    case ActionTypes.TOGGLE_ACTION: {
      return {
        ...state,
        newUser: !state.newUser
      }
    }

    default: {
      return state;
    }
  }
}