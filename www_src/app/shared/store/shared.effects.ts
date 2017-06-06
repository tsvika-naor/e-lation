import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Effect, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { ActionTypes as authActions, LoadUserDataAction, LoadUserAction, SaveUserAction } from '../../auth';
import { ActionTypes as navActions } from '../../nav';
import { ActionTypes as userActions } from '../../user';
import { State } from '../../app-store.state';
import { go } from '@ngrx/router-store';

@Injectable()
export class SharedEffects {

    @Effect() loadUserData$ = this.actions$
        .ofType(authActions.LOAD_USER_DATA)
        .map((action: LoadUserDataAction) => action.payload)
        .mergeMap(data => Observable.from([
            { type: navActions.CONFIG_PAGES, payload: data.links },
            { type: userActions.L_GET_USER, payload: data.user }
        ]));

    @Effect() getUser$ = this.actions$
        .ofType(authActions.LOAD_USER)
        .map((action: LoadUserAction) => action.payload)
        .map(user => ({ type: userActions.L_GET_USER, payload: user }));

    @Effect() saveUser$ = this.actions$
        .ofType(authActions.SAVE_USER)
        .map((action: SaveUserAction) => action.payload)
        .mergeMap(user => {
            return Observable.from([
                { type: authActions.AUTH_SUCCESS, payload: localStorage.getItem('token') },
                { type: userActions.S_NEW_USER, payload: user },
                go('/feed')
            ]);
        });

    constructor(private actions$: Actions, private http$: Http, private store$: Store<State>) { }
}
