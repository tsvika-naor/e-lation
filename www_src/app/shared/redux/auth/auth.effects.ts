import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { go } from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import * as Auth from './auth.actions';
import * as User from '../user/user.actions';

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions, private http$: Http) { }

    @Effect() login$ = this.actions$
        .ofType(Auth.ActionTypes.LOGIN)
        // Map the payload into JSON to use as the request body
        .map((action: Auth.LoginAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/auth/login', payload))
        // If successful, dispatch success action with result
        .mergeMap(res => Observable.from([{ type: Auth.ActionTypes.AUTH_SUCCESS, payload: res.json().token }, { type: User.L_GetUserAction, payload: res.json().user } , go("/feed")]))
        // If request fails, dispatch failed action
        .catch(err => Observable.of({ type: Auth.ActionTypes.AUTH_FAIL, payload: err }));
}