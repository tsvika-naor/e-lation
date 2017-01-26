import '@ngrx/core/src/add/operator/select';
import { isDevMode } from '@angular/core';

import { compose } from '@ngrx/core';
import { ActionReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import { RouterState, routerReducer } from '@ngrx/router-store';
import { State as AuthState, authReducer } from './auth';
import { State as UserState, userReducer } from './user';
import { State as GroupState, groupReducer } from './group';
import { State as EventState, eventReducer } from './event';
export { AuthEffects } from './auth';
export { GroupEffects } from "./group";
export { EventEffects } from './event';


export interface State {
  auth: AuthState;
  user: UserState;
  group: GroupState;
  event: EventState;
  router: RouterState;
}

const reducers = {
  auth: authReducer,
  user: userReducer,
  event: eventReducer,
  group: groupReducer,
  router: routerReducer,
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (isDevMode()) {
    return developmentReducer(state, action);
  }
  else {
    return productionReducer(state, action);
  }
}