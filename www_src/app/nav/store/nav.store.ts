import { Actions, ActionTypes } from './nav.actions';
import { safeAction } from '../../shared/utils';

export interface State {
    searchResults: SearchResult;
    userPages: UserPages;
};

const initialState: State = {
    searchResults: {
        providers: [],
        users: [],
        groups: [],
        events: [],
        posts: []
    },
    userPages: {
        userLinks: [],
        providers: [{ _id: '590f477cf36d281fc3b97434', user: { firstName: 'Taylor', lastName: 'Macdonald' } }],
        groups: [{ _id: '588e2a3f6bb702290088e092', name: 'AngularIL' }],
        events: [{ _id: '588e2a2630f67d154423b9dd', name: 'AngularUP' }]
    }
};

function reducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.CONFIG_PAGES: {
            return safeAction(action, state, (payload: UserPages, newState) => {
                newState.userPages = payload;
                return newState;
            });
        }

        case ActionTypes.UPDATE_PAGES: {
            return safeAction(action, state, (payload: UserPages, newState) => {
                newState.userPages = Object.assign({}, payload);
                return newState;
            });
        }

        case ActionTypes.UPDATE_RESULTS: {
            return safeAction(action, state, (payload: SearchResult, newState) => {
                newState.searchResults = Object.assign({}, payload);
                return newState;
            });
        }

        case ActionTypes.CLEAR_RESULTS: {
            return safeAction(action, state, (payload: SearchResult, newState) => {
                newState.searchResults = Object.assign({}, initialState.searchResults);
                return newState;
            });
        }

        default: {
            return state;
        }
    }
}

export const navReducer = { nav: reducer };
