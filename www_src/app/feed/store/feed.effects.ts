import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { go } from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import * as Feed from './feed.actions';
import { HttpService } from '../../shared';
import { Http } from '@angular/http';

@Injectable()
export class FeedEffects {

    @Effect() getFeed$ = this.actions$
        .ofType(Feed.ActionTypes.S_GET_FEED)
        // Map the payload into JSON to use as the request body
        .map((action: Feed.S_GetFeedAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/feed/get', payload))
        // If successful, dispatch success action with result
        .map(res => ({ type: Feed.ActionTypes.L_GET_FEED, payload: res.json() }));

    @Effect() likePost$ = this.actions$
        .ofType(Feed.ActionTypes.S_LIKE_POST)
        // Map the payload into JSON to use as the request body
        .map((action: Feed.S_LikePostAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/feed/post/like', payload))
        // If successful, dispatch success action with result
        .map(res => ({ type: Feed.ActionTypes.L_LIKE_POST, payload: res.json() }));

    @Effect() likeComment$ = this.actions$
        .ofType(Feed.ActionTypes.S_LIKE_COMMENT)
        // Map the payload into JSON to use as the request body
        .map((action: Feed.S_LikeCommentAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/feed/comment/like', payload))
        // If successful, dispatch success action with result
        .map(res => ({ type: Feed.ActionTypes.L_LIKE_COMMENT, payload: res.json() }));

    @Effect() likeSubComment$ = this.actions$
        .ofType(Feed.ActionTypes.S_LIKE_SUBCOMMENT)
        // Map the payload into JSON to use as the request body
        .map((action: Feed.S_LikeSubCommentAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/feed/comment/like', payload))
        // If successful, dispatch success action with result
        .map(res => ({ type: Feed.ActionTypes.L_LIKE_SUBCOMMENT, payload: res.json() }));

    @Effect() postComment$ = this.actions$
        .ofType(Feed.ActionTypes.S_POST_COMMENT)
        // Map the payload into JSON to use as the request body
        .map((action: Feed.S_PostCommentAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/feed/comment/post', payload))
        // If successful, dispatch success action with result
        .map(res => ({ type: Feed.ActionTypes.L_POST_COMMENT, payload: res.json() }));

    constructor(private actions$: Actions, private http$: Http) { }
}
