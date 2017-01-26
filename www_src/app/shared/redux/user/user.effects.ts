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

import * as User from './user.actions';

@Injectable()
export class UserEffects {

    constructor(private actions$: Actions, private http$: Http) { }

    @Effect() login$ = this.actions$
        .ofType(User.ActionTypes.S_USER_UPDATE)
        // Map the payload into JSON to use as the request body
        .map((action: User.S_UserUpdateAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/user/update', payload))
        // If successful, dispatch success action with result
        .map(res => ({ type: User.ActionTypes.S_USER_UPDATE, payload: res.json() }));
}