import { isDevMode } from '@angular/core';
import { compose } from '@ngrx/core';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { State } from './app-store.state';
import { authReducer } from './auth';
import { eventReducer } from './event';
import { feedReducer } from './feed';
import { groupReducer } from './group';
import { navReducer } from './nav';
import { providerReducer } from './provider';
import { userReducer } from './user';

const reducers = Object.assign({}, authReducer, eventReducer, feedReducer, groupReducer, navReducer, providerReducer, userReducer);

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    if (isDevMode()) {
        return developmentReducer(state, action);
    } else {
        return productionReducer(state, action);
    }
}
