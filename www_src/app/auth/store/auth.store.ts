import { Actions, ActionTypes } from './auth.actions';
import { safeAction } from '../../shared/utils';


export interface State {
    authenticated: boolean;
    newUser: boolean;
    err: Error;
};

const initialState: State = {
    authenticated: false,
    newUser: false,
    err: null
};

function reducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.AUTH_SUCCESS: {
            return safeAction(action, state, (payload: string, newState) => {
                newState.authenticated = true;
                newState.err = null;
                return newState;
            });
        }

        case ActionTypes.AUTH_FAIL: {
            localStorage.removeItem('token');
            localStorage.removeItem('provider');

            return safeAction(action, state, (payload: Error, newState) => {
                newState.authenticated = false;
                newState.err = payload;
                return newState;
            });
        }

        case ActionTypes.TOGGLE_ACTION: {
            return safeAction(action, state, (payload: UserPages, newState) => {
                newState.newUser = !newState.newUser;
                return newState;
            });
        }

        default: {
            return state;
        }
    }
}
export const authReducer = { auth: reducer };
