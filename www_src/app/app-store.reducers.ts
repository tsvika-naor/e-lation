import { ActionReducer, combineReducers } from '@ngrx/store';

import { State } from './app-store.state';
import { authReducer } from './auth';
import { eventReducer } from './event';
import { feedReducer } from './feed';
import { groupReducer } from './group';
import { navReducer } from './nav';
import { providerReducer } from './provider';
import { userReducer } from './user';

const reducers = Object.assign({}, authReducer, eventReducer, feedReducer, groupReducer, navReducer, providerReducer, userReducer);

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return productionReducer(state, action);
}