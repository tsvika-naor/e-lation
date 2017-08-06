import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { go } from '@ngrx/router-store';
import { Effect, Actions } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import {
    ActionTypes, S_GetEventAction, S_EditEventAction, S_NewEventAction,
    S_AddMemberAction, S_RemoveMemberAction, S_PromoteAdminAction,
    S_RevokeAdminAction, S_RemoveAdminAction
} from './event.actions';
import { ActionTypes as NavActions } from '../../nav/store';
import { getOptions } from '../../shared';
import { State } from '../../app-store.state';

@Injectable()
export class EventEffects {

    @Effect() getEvent$ = this.actions$
        .ofType(ActionTypes.S_GET_EVENT)
        // Map the payload into JSON to use as the request body
        .map((action: S_GetEventAction) => action.payload)
        .switchMap(payload => this.http$.get('/api/event/' + payload, getOptions()))
        // If successful, dispatch success action with result
        .map(res => ({ type: ActionTypes.L_GET_EVENT, payload: res.json() }));

    @Effect() editEvent$ = this.actions$
        .ofType(ActionTypes.S_EDIT_EVENT)
        // Map the payload into JSON to use as the request body
        .map((action: S_EditEventAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/event/update', payload, getOptions()))
        // If successful, dispatch success action with result
        .map(res => ({ type: ActionTypes.L_EDIT_EVENT, payload: res.json() }));

    @Effect() saveEvent$ = this.actions$
        .ofType(ActionTypes.S_NEW_EVENT)
        // Map the payload into JSON to use as the request body
        .map((action: S_NewEventAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/event/new', payload, getOptions()))
        // If successful, dispatch success action with result
        .mergeMap(res => Observable.from([
            { type: ActionTypes.L_GET_EVENT, payload: res.json() },
            { type: NavActions.ADD_EVENT, payload: res.json() },
            go('/event/' + res.json()._id)
        ]));

    @Effect() addMember$ = this.actions$
        .ofType(ActionTypes.S_ADD_MEMBER)
        // Map the payload into JSON to use as the request body
        .map((action: S_AddMemberAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/event/member/add', payload, getOptions()))
        .switchMap(res => this.store$
            .select(state => state.event)
            .map(event => ({ res, event })))
        .map(data => Observable.from([
            { type: ActionTypes.L_ADD_MEMBER, payload: data.res.json() },
            { type: NavActions.ADD_EVENT, payload: data.event }
        ]));

    @Effect() removeMember$ = this.actions$
        .ofType(ActionTypes.S_REMOVE_MEMBER)
        // Map the payload into JSON to use as the request body
        .map((action: S_RemoveMemberAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/event/member/remove', payload, getOptions()))
        .switchMap(res => this.store$
            .select(state => state.event)
            .map(event => ({ reqUser: res.json(), event, authUser: null })))
        .switchMap(postData => this.store$
            .select(state => state.auth.userId)
            .map(id => {
                postData.authUser = id;
                return postData;
            }))
        .map(data => {
            if (data.reqUser === data.authUser) {
                return Observable.from([
                    { type: ActionTypes.L_REMOVE_MEMBER, payload: data.reqUser },
                    { type: NavActions.REMOVE_EVENT, payload: data.event }
                ]);
            } else {
                return { type: ActionTypes.L_REMOVE_MEMBER, payload: data.reqUser };
            }
        });

    @Effect() promoteAdmin$ = this.actions$
        .ofType(ActionTypes.S_PROMOTE_ADMIN)
        .map((action: S_PromoteAdminAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/event/admin/promote', payload, getOptions()))
        .map(res => ({ type: ActionTypes.L_PROMOTE_ADMIN, payload: res.json() }));

    @Effect() revokeAdmin$ = this.actions$
        .ofType(ActionTypes.S_REVOKE_ADMIN)
        .map((action: S_RevokeAdminAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/event/admin/revoke', payload, getOptions()))
        .map(res => ({ type: ActionTypes.L_REVOKE_ADMIN, payload: res.json() }));

    @Effect() removeAdmin$ = this.actions$
        .ofType(ActionTypes.S_REMOVE_ADMIN)
        // Map the payload into JSON to use as the request body
        .map((action: S_RemoveAdminAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/event/admin/remove', payload, getOptions()))
        .switchMap(res => this.store$
            .select(state => state.event)
            .map(event => ({ res, event })))
        .map(data => Observable.from([
            { type: ActionTypes.L_REMOVE_ADMIN, payload: data.res.json() },
            { type: NavActions.REMOVE_EVENT, payload: data.event }
        ]));

    constructor(private store$: Store<State>, private actions$: Actions, private http$: Http) { }
}
