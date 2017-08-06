import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Effect, Actions } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import {
    ActionTypes, S_GetProviderAction, S_AddReviewAction, S_EditReviewAction,
    S_DeleteReviewAction, S_FollowUserAction, S_UnfollowUserAction
} from './provider.actions';
import { ActionTypes as NavActions} from '../../nav/store';
import { getOptions } from '../../shared';
import { State } from '../../app-store.state';

@Injectable()
export class ProviderEffects {

    @Effect() get$ = this.actions$
        .ofType(ActionTypes.S_GET_PROVIDER)
        // Map the payload into JSON to use as the request body
        .map((action: S_GetProviderAction) => action.payload)
        .switchMap(payload => this.http$.get('/api/provider/' + payload, getOptions()))
        // If successful, dispatch success action with result
        .map(res => ({ type: ActionTypes.L_GET_PROVIDER, payload: res.json() }));

    @Effect() addReview$ = this.actions$
        .ofType(ActionTypes.S_ADD_REVIEW)
        // Map the payload into JSON to use as the request body
        .map((action: S_AddReviewAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/provider/review/new', payload, getOptions()))
        // If successful, dispatch success action with result
        .map(res => ({ type: ActionTypes.L_ADD_REVIEW, payload: res.json() }));

    @Effect() editReview$ = this.actions$
        .ofType(ActionTypes.S_EDIT_REVIEW)
        // Map the payload into JSON to use as the request body
        .map((action: S_EditReviewAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/provider/review/edit', payload, getOptions()))
        // If successful, dispatch success action with result
        .map(res => ({ type: ActionTypes.L_EDIT_REVIEW, payload: res.json() }));

    @Effect() deleteReview$ = this.actions$
        .ofType(ActionTypes.S_DELETE_REVIEW)
        // Map the payload into JSON to use as the request body
        .map((action: S_DeleteReviewAction) => action.payload)
        .switchMap(payload => this.http$.delete('/api/provider/review/' + payload, getOptions()))
        // If successful, dispatch success action with result
        .map(res => ({ type: ActionTypes.L_DELETE_REVIEW, payload: res.json() }));

    @Effect() followUser$ = this.actions$
        .ofType(ActionTypes.S_FOLLOW_USER)
        // Map the payload into JSON to use as the request body
        .map((action: S_FollowUserAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/user/follow', payload, getOptions()))
        .switchMap(res => this.store$
            .select(state => state.provider)
            .map(provider => ({ res, provider })))
        .map(data => Observable.from([
            { type: ActionTypes.L_FOLLOW_USER, payload: data.res.json() },
            { type: NavActions.ADD_PROVIDER, payload: data.provider }
        ]));

    @Effect() unfollowUser$ = this.actions$
        .ofType(ActionTypes.S_UNFOLLOW_USER)
        // Map the payload into JSON to use as the request body
        .map((action: S_UnfollowUserAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/user/unfollow', payload, getOptions()))
        .switchMap(res => this.store$
            .select(state => state.provider)
            .map(provider => ({ res, provider })))
        .map(data => Observable.from([
            { type: ActionTypes.L_UNFOLLOW_USER, payload: data.res.json() },
            { type: NavActions.REMOVE_PROVIDER, payload: data.provider }
        ]));

    constructor(private store$: Store<State>, private actions$: Actions, private http$: Http) { }
}
