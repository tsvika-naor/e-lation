import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { go } from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';

import { RegisterAction, LoginAction, ActionTypes as actions } from './auth.actions';
import { getOptions } from '../../shared';
import { Http } from '@angular/http';

@Injectable()
export class AuthEffects {
    @Effect() login$ = this.actions$
        .ofType(actions.LOGIN)
        // Map the payload into JSON to use as the request body
        .map((action: LoginAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/auth/login', null, getOptions()))
        // If successful, dispatch success action with result
        .mergeMap(res => Observable.from([
            { type: actions.AUTH_SUCCESS, payload: res.json().user._id },
            { type: actions.LOAD_USER_DATA, payload: res.json() },
            go('/feed')
        ]))
        // If request fails, dispatch failed action
        .catch(err => Observable.of({ type: actions.AUTH_FAIL, payload: err }));

    @Effect() register$ = this.actions$
        .ofType(actions.REGISTER)
        // Map the payload into JSON to use as the request body
        .map((action: RegisterAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/auth/register', { access_token: payload }, getOptions())
            // If successful, dispatch success action with result
            .mergeMap(res => Observable.from([
                { type: actions.LOAD_USER, payload: res.json() },
                go('/register'/* + (payload ? '/' + payload : '')*/)
            ]))
            // If request fails, dispatch failed action
            .catch(err => Observable.of({ type: actions.AUTH_FAIL, payload: err })));

    constructor(private actions$: Actions, private http$: Http) { }
}
