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

import * as Info from './info.actions';

@Injectable()
export class InfoEffects {

    constructor(private actions$: Actions, private http$: Http) { }

    @Effect() getInfo$ = this.actions$
        .ofType(Info.ActionTypes.S_GET_RESULTS)
        // Map the payload into JSON to use as the request body
        .map((action: Info.S_GetResultsAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/search/all', {query: payload}))
        // If successful, dispatch success action with result
        .map(res => ({ type: Info.ActionTypes.L_UPDATE_RESULTS, payload: res.json() }));
}