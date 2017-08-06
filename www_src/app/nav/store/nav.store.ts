import { Actions, ActionTypes } from './nav.actions';
import { safeAction } from '../../shared/utils';
import { groupReducer } from '../../group/store/group.store';

export interface State {
    searchResults: SearchResult;
    userPages: UserPages;
    showSidebar: boolean;
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
        providers: [],
        groups: [],
        events: []
    },
    showSidebar: false
};

function reducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.CONFIG_PAGES: {
            return safeAction(action, state, (payload: UserPages, newState) => {
                newState.userPages = payload;
                return newState;
            });
        }

        case ActionTypes.ADD_PROVIDER: {
            return safeAction(action, state, (payload: Provider, newState) => {
                newState.userPages.providers.push(payload);
                return newState;
            });
        }

        case ActionTypes.ADD_GROUP: {
            return safeAction(action, state, (payload: Group, newState) => {
                newState.userPages.groups.push(payload);
                return newState;
            });
        }

        case ActionTypes.ADD_EVENT: {
            return safeAction(action, state, (payload: GeoEvent, newState) => {
                newState.userPages.events.push(payload);
                return newState;
            });
        }

        case ActionTypes.REMOVE_PROVIDER: {
            return safeAction(action, state, (payload: ObjectId, newState) => {
                const index = newState.userPages.providers.findIndex(provider => provider._id === payload);
                newState.userPages.providers.splice(index, 1);
                return newState;
            });
        }

        case ActionTypes.REMOVE_GROUP: {
            return safeAction(action, state, (payload: ObjectId, newState) => {
                const index = newState.userPages.groups.findIndex(group => group._id === payload);
                newState.userPages.groups.splice(index, 1);
                return newState;
            });
        }

        case ActionTypes.REMOVE_EVENT: {
            return safeAction(action, state, (payload: ObjectId, newState) => {
                const index = newState.userPages.events.findIndex(event => event._id === payload);
                newState.userPages.events.splice(index, 1);
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
