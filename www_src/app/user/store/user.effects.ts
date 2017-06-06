import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import * as User from './user.actions';
import { HttpService } from '../../shared';
import { Http } from '@angular/http';
import { go } from '@ngrx/router-store';

@Injectable()
export class UserEffects {

    @Effect() getUser$ = this.actions$
        .ofType(User.ActionTypes.S_GET_USER)
        // Map the payload into JSON to use as the request body
        .map((action: User.S_GetUserAction) => action.payload)
        .switchMap(payload => this.http$.get('/api/user/' + payload))
        // If successful, dispatch success action with result
        .map(res => ({ type: User.ActionTypes.L_GET_USER, payload: res.json() }));

    @Effect() userUpdate$ = this.actions$
        .ofType(User.ActionTypes.S_USER_UPDATE)
        // Map the payload into JSON to use as the request body
        .map((action: User.S_UserUpdateAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/user/update', payload))
        // If successful, dispatch success action with result
        .mergeMap(res => Observable.from([
            { type: User.ActionTypes.L_USER_UPDATE, payload: res.json() },
            go('/user/' + res.json()._id)
        ]));

    @Effect() saveUser$ = this.actions$
        .ofType(User.ActionTypes.S_NEW_USER)
        // Map the payload into JSON to use as the request body
        .map((action: User.S_NewUserAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/user/new', payload))
        // If successful, dispatch success action with result
        .mergeMap(res => Observable.from([
            { type: User.ActionTypes.L_GET_USER, payload: res.json() },
            go('/user/' + res.json()._id)
        ]));

    constructor(private actions$: Actions, private http$: Http) { }
}
