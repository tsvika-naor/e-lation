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

    @Effect() getPost$ = this.actions$
        .ofType(Feed.ActionTypes.S_GET_POST)
        // Map the payload into JSON to use as the request body
        .map((action: Feed.S_GetPostAction) => action.payload)
        .switchMap(payload => this.http$.get('/api/feed/post/' + payload))
        // If successful, dispatch success action with result
        .map(res => ({ type: Feed.ActionTypes.L_GET_POST, payload: res.json() }));

    constructor(private actions$: Actions, private http$: Http) { }
}
