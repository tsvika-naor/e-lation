import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { GetResultsAction, GetLinksAction, ActionTypes as actions } from './nav.actions';
import { Http } from '@angular/http';

@Injectable()
export class NavEffects {

    @Effect() getResults$ = this.actions$
        .ofType(actions.GET_RESULTS)
        // Map the payload into JSON to use as the request body
        .map((action: GetResultsAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/search/all', { query: payload }))
        // If successful, dispatch success action with result
        .map(res => ({ type: actions.UPDATE_RESULTS, payload: res.json() }));

    // TEST ONLY
    @Effect() getLinks$ = this.actions$
        .ofType(actions.GET_LINKS)
        // Map the payload into JSON to use as the request body
        .map((action: GetLinksAction) => action.payload)
        .switchMap(payload => this.http$.get('/api/user/links/' + payload))
        // If successful, dispatch success action with result
        .map(res => ({ type: actions.CONFIG_PAGES, payload: res.json().links }));

    constructor(private actions$: Actions, private http$: Http) { }
}
