import '@ngrx/core/src/add/operator/select';
import { isDevMode } from '@angular/core';

import { compose } from '@ngrx/core';
import { ActionReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import { RouterState, routerReducer } from '@ngrx/router-store';

import { State as AuthState, authReducer } from './auth';
import { State as EventState, eventReducer } from './event';
import { State as FeedState, feedReducer } from './feed';
import { State as GroupState, groupReducer } from './group';
import { State as ProviderState, providerReducer } from './provider';
import { State as UserState, userReducer } from './user';

export { AuthEffects } from './auth';
export { EventEffects } from './event';
export { FeedEffects } from './feed';
export { GroupEffects } from "./group";
export { ProviderEffects } from './provider';
export { UserEffects } from './user';


export interface State {
  auth: AuthState;
  event: EventState;
  feed: FeedState;
  group: GroupState;
  provider: ProviderState;
  router: RouterState;
  user: UserState;
}

const reducers = {
  auth: authReducer,
  event: eventReducer,
  feed: feedReducer,
  group: groupReducer,
  provider: providerReducer,
  router: routerReducer,
  user: userReducer
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