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
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import * as Provider from './provider.actions';

@Injectable()
export class ProviderEffects {

    constructor(private actions$: Actions, private http$: Http) { }

    @Effect() get$ = this.actions$
        .ofType(Provider.ActionTypes.S_GET_PROVIDER)
        // Map the payload into JSON to use as the request body
        .map((action: Provider.S_GetProviderAction) => action.payload)
        .switchMap(payload => this.http$.get('/api/provider/'+payload))
        // If successful, dispatch success action with result
        .map(res => ({ type: Provider.ActionTypes.L_GET_PROVIDER, payload: res.json() }));

    @Effect() add$ = this.actions$
        .ofType(Provider.ActionTypes.S_ADD_REVIEW)
        // Map the payload into JSON to use as the request body
        .map((action: Provider.S_GetProviderAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/provider/review/new', payload))
        // If successful, dispatch success action with result
        .map(res => ({ type: Provider.ActionTypes.L_ADD_REVIEW, payload: res.json() }));

    @Effect() edit$ = this.actions$
        .ofType(Provider.ActionTypes.S_EDIT_REVIEW)
        // Map the payload into JSON to use as the request body
        .map((action: Provider.S_GetProviderAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/provider/review/edit', payload))
        // If successful, dispatch success action with result
        .map(res => ({ type: Provider.ActionTypes.L_EDIT_REVIEW, payload: res.json() }));

    @Effect() delete$ = this.actions$
        .ofType(Provider.ActionTypes.S_DELETE_REVIEW)
        // Map the payload into JSON to use as the request body
        .map((action: Provider.S_GetProviderAction) => action.payload)
        .switchMap(payload => this.http$.delete('/api/provider/review/'+payload))
        // If successful, dispatch success action with result
        .map(res => ({ type: Provider.ActionTypes.L_DELETE_REVIEW, payload: res.json() }));
}