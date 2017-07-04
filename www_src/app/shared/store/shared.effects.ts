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
import {
    ActionTypes as sharedActions, S_NewPostAction, S_LikePostAction, S_LikeCommentAction,
    S_LikeSubCommentAction, S_PostCommentAction
} from './shared.actions';
import { ActionTypes as userActions, L_NewUserAction } from '../../user';
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
                { type: authActions.AUTH_SUCCESS, payload: null },
                { type: userActions.S_NEW_USER, payload: user }
            ]);
        });

    @Effect() loadUser$ = this.actions$
        .ofType(userActions.L_NEW_USER)
        .map((action: L_NewUserAction) => action.payload)
        .mergeMap(data => {
            return Observable.from([
                { type: authActions.SAVE_USER_ID, payload: data.id },
                { type: navActions.CONFIG_PAGES, payload: data.links }
            ]);
        });

    @Effect() newPost$ = this.actions$
        .ofType(sharedActions.S_NEW_POST)
        // Map the payload into JSON to use as the request body
        .map((action: S_NewPostAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/feed/post', payload.data)
            // If successful, dispatch success action with result
            // .map(res => ({ type: Feed.ActionTypes.S_GET_FEED, payload: payload.child.user })));
            .map(res => ({ type: payload.action, payload: res.json() })));

    @Effect() likePost$ = this.actions$
        .ofType(sharedActions.S_LIKE_POST)
        // Map the payload into JSON to use as the request body
        .map((action: S_LikePostAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/feed/post/like', payload.data)
        // If successful, dispatch success action with result
        .map(res => ({ type: payload.action, payload: res.json() })));

    @Effect() likeComment$ = this.actions$
        .ofType(sharedActions.S_LIKE_COMMENT)
        // Map the payload into JSON to use as the request body
        .map((action: S_LikeCommentAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/feed/comment/like', payload.data)
            // If successful, dispatch success action with result
            .map(res => ({ type: payload.action, payload: res.json() })));

    @Effect() likeSubComment$ = this.actions$
        .ofType(sharedActions.S_LIKE_SUBCOMMENT)
        // Map the payload into JSON to use as the request body
        .map((action: S_LikeSubCommentAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/feed/comment/like', payload.data)
            // If successful, dispatch success action with result
            .map(res => ({ type: payload.action, payload: res.json() })));

    @Effect() postComment$ = this.actions$
        .ofType(sharedActions.S_POST_COMMENT)
        // Map the payload into JSON to use as the request body
        .map((action: S_PostCommentAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/feed/comment/post', payload.data)
            // If successful, dispatch success action with result
            .map(res => ({ type: payload.action, payload: res.json() })));

    constructor(private actions$: Actions, private http$: Http, private store$: Store<State>) { }
}
