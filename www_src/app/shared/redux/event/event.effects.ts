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

import * as Event from './event.actions';

@Injectable()
export class EventEffects {

    constructor(private actions$: Actions, private http$: Http) { }

    @Effect() getEvent$ = this.actions$
        .ofType(Event.ActionTypes.S_GET_EVENT)
        // Map the payload into JSON to use as the request body
        .map((action: Event.S_GetEventAction) => action.payload)
        .switchMap(payload => this.http$.get('/api/event/'+payload))
        // If successful, dispatch success action with result
        .map(res => ({ type: Event.ActionTypes.L_GET_EVENT, payload: res.json() }));

    @Effect() addMember$ = this.actions$
        .ofType(Event.ActionTypes.S_ADD_MEMBER)
        // Map the payload into JSON to use as the request body
        .map((action: Event.S_AddMemberAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/event/member/add', payload))
        // If successful, dispatch success action with result
        .map(res => ({ type: Event.ActionTypes.L_ADD_MEMBER, payload: res.json() }));

    @Effect() addAdmin$ = this.actions$
        .ofType(Event.ActionTypes.S_ADD_ADMIN)
        // Map the payload into JSON to use as the request body
        .map((action: Event.S_AddAdminAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/event/admin/add', payload))
        // If successful, dispatch success action with result
        .map(res => ({ type: Event.ActionTypes.L_ADD_ADMIN, payload: res.json() }));

    @Effect() removeMember$ = this.actions$
        .ofType(Event.ActionTypes.S_REMOVE_MEMBER)
        // Map the payload into JSON to use as the request body
        .map((action: Event.S_RemoveMemberAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/event/member/remove', payload))
        // If successful, dispatch success action with result
        .map(res => ({ type: Event.ActionTypes.L_REMOVE_MEMBER, payload: res.json() }));

    @Effect() removeAdmin$ = this.actions$
        .ofType(Event.ActionTypes.S_REMOVE_ADMIN)
        // Map the payload into JSON to use as the request body
        .map((action: Event.S_RemoveAdminAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/event/admin/remove', payload))
        // If successful, dispatch success action with result
        .map(res => ({ type: Event.ActionTypes.L_REMOVE_ADMIN, payload: res.json() }));

    @Effect() editEvent$ = this.actions$
        .ofType(Event.ActionTypes.S_EDIT_EVENT)
        // Map the payload into JSON to use as the request body
        .map((action: Event.S_RemoveAdminAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/event/update', payload))
        // If successful, dispatch success action with result
        .map(res => ({ type: Event.ActionTypes.L_EDIT_EVENT, payload: res.json() }));
}