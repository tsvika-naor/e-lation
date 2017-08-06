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
    ActionTypes, S_GetGroupAction, S_UpdateGroupAction, S_NewGroupAction,
    S_AddMemberAction, S_RemoveMemberAction, S_PromoteAdminAction,
    S_RevokeAdminAction, S_RemoveAdminAction
} from './group.actions';
import { ActionTypes as NavActions} from '../../nav/store';
import { getOptions } from '../../shared';
import { State } from '../../app-store.state';

@Injectable()
export class GroupEffects {

    @Effect() getGroup$ = this.actions$
        .ofType(ActionTypes.S_GET_GROUP)
        .map((action: S_GetGroupAction) => action.payload)
        .switchMap(payload => this.http$.get('/api/group/' + payload, getOptions()))
        .map(res => ({ type: ActionTypes.L_GET_GROUP, payload: res.json() }));

    @Effect() updateGroup$ = this.actions$
        .ofType(ActionTypes.S_UPDATE_GROUP)
        .map((action: S_UpdateGroupAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/group/update', payload, getOptions()))
        .map(res => ({ type: ActionTypes.L_UPDATE_GROUP, payload: res.json() }));

    @Effect() saveGroup$ = this.actions$
        .ofType(ActionTypes.S_NEW_GROUP)
        // Map the payload into JSON to use as the request body
        .map((action: S_NewGroupAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/group/new', payload, getOptions()))
        // If successful, dispatch success action with result
        .mergeMap(res => Observable.from([
            { type: ActionTypes.L_GET_GROUP, payload: res.json() },
            { type: NavActions.ADD_GROUP, payload: res.json()},
            go('/group/' + res.json()._id)
        ]));

    @Effect() addMember$ = this.actions$
        .ofType(ActionTypes.S_ADD_MEMBER)
        .map((action: S_AddMemberAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/group/member/add', payload, getOptions()))
        .switchMap(res => this.store$
            .select(state => state.group)
            .map(group => ({ res, group })))
        .map(data => Observable.from([
            { type: ActionTypes.L_ADD_MEMBER, payload: data.res.json() },
            { type: NavActions.ADD_GROUP, payload: data.group }
        ]));

    @Effect() removeMember$ = this.actions$
        .ofType(ActionTypes.S_REMOVE_MEMBER)
        .map((action: S_RemoveMemberAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/group/member/remove', payload, getOptions()))
        .switchMap(res => this.store$
            .select(state => state.group)
            .map(group => ({ reqUser: res.json(), group, authUser: null })))
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
                    { type: NavActions.REMOVE_GROUP, payload: data.group }
                ]);
            } else {
                return { type: ActionTypes.L_REMOVE_MEMBER, payload: data.reqUser };
            }
        });

    @Effect() promoteAdmin$ = this.actions$
        .ofType(ActionTypes.S_PROMOTE_ADMIN)
        .map((action: S_PromoteAdminAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/group/admin/promote', payload, getOptions()))
        .map(res => ({ type: ActionTypes.L_PROMOTE_ADMIN, payload: res.json() }));

    @Effect() revokeAdmin$ = this.actions$
        .ofType(ActionTypes.S_REVOKE_ADMIN)
        .map((action: S_RevokeAdminAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/group/admin/revoke', payload, getOptions()))
        .map(res => ({ type: ActionTypes.L_REVOKE_ADMIN, payload: res.json() }));

    @Effect() removeAdmin$ = this.actions$
        .ofType(ActionTypes.S_REMOVE_ADMIN)
        .map((action: S_RemoveAdminAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/group/admin/remove', payload, getOptions()))
        .switchMap(res => this.store$
            .select(state => state.group)
            .map(group => ({ res, group })))
        .map(data => Observable.from([
            { type: ActionTypes.L_REMOVE_ADMIN, payload: data.res.json() },
            { type: NavActions.REMOVE_GROUP, payload: data.group }
        ]));

    constructor(private store$: Store<State>, private actions$: Actions, private http$: Http) { }
}
