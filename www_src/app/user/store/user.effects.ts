import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { go } from '@ngrx/router-store';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import {
    ActionTypes, S_GetUserAction, S_UserUpdateAction, S_NewUserAction,
    S_FollowUserAction, S_UnfollowUserAction
} from './user.actions';
import { getOptions } from '../../shared';

@Injectable()
export class UserEffects {

    @Effect() getUser$ = this.actions$
        .ofType(ActionTypes.S_GET_USER)
        // Map the payload into JSON to use as the request body
        .map((action: S_GetUserAction) => action.payload)
        .switchMap(payload => this.http$.get('/api/user/' + payload, getOptions()))
        // If successful, dispatch success action with result
        .map(res => ({ type: ActionTypes.L_GET_USER, payload: res.json() }));

    @Effect() userUpdate$ = this.actions$
        .ofType(ActionTypes.S_USER_UPDATE)
        // Map the payload into JSON to use as the request body
        .map((action: S_UserUpdateAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/user/update', payload, getOptions()))
        // If successful, dispatch success action with result
        .map(res => ({ type: ActionTypes.L_USER_UPDATE, payload: res.json() }));

    @Effect() saveUser$ = this.actions$
        .ofType(ActionTypes.S_NEW_USER)
        // Map the payload into JSON to use as the request body
        .map((action: S_NewUserAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/user/new', payload, getOptions()))
        // If successful, dispatch success action with result
        .mergeMap(res => Observable.from([
            { type: ActionTypes.L_GET_USER, payload: res.json().user },
            { type: ActionTypes.L_NEW_USER, payload: { id: res.json().user._id, links: res.json().links } },
            go('/feed')
        ]));

    @Effect() followUser$ = this.actions$
        .ofType(ActionTypes.S_FOLLOW_USER)
        // Map the payload into JSON to use as the request body
        .map((action: S_FollowUserAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/user/follow', payload, getOptions()))
        // If successful, dispatch success action with result
        .map(res => ({ type: ActionTypes.L_FOLLOW_USER, payload: res.json() }));

    @Effect() unfollowUser$ = this.actions$
        .ofType(ActionTypes.S_UNFOLLOW_USER)
        // Map the payload into JSON to use as the request body
        .map((action: S_UnfollowUserAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/user/unfollow', payload, getOptions()))
        // If successful, dispatch success action with result
        .map(res => ({ type: ActionTypes.L_UNFOLLOW_USER, payload: res.json() }));

    constructor(private actions$: Actions, private http$: Http) { }
}
