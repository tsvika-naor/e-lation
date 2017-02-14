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

import * as Group from './group.actions';

@Injectable()
export class GroupEffects {

    constructor(private actions$: Actions, private http$: Http) { }

    @Effect() getGroup$ = this.actions$
        .ofType(Group.ActionTypes.S_GET_GROUP)
        .map((action: Group.S_GetGroupAction) => action.payload)
        .switchMap(payload => this.http$.get('/api/group/'+payload))
        .map(res => ({ type: Group.ActionTypes.L_GET_GROUP, payload: res.json() }));

    @Effect() addMember$ = this.actions$
        .ofType(Group.ActionTypes.S_ADD_MEMBER)
        .map((action: Group.S_AddMemberAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/group/member/add', payload))
        .map(res => ({ type: Group.ActionTypes.L_ADD_MEMBER, payload: res.json() }));

    @Effect() addAdmin$ = this.actions$
        .ofType(Group.ActionTypes.S_ADD_ADMIN)
        .map((action: Group.S_AddAdminAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/group/admin/add', payload))
        .map(res => ({ type: Group.ActionTypes.L_ADD_ADMIN, payload: res.json() }));


    @Effect() removeMember$ = this.actions$
        .ofType(Group.ActionTypes.S_ADD_MEMBER)
        .map((action: Group.S_RemoveMemberAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/group/member/remove', payload))
        .map(res => ({ type: Group.ActionTypes.L_REMOVE_MEMBER, payload: res.json() }));

    @Effect() removeAdmin$ = this.actions$
        .ofType(Group.ActionTypes.S_REMOVE_ADMIN)
        .map((action: Group.S_RemoveAdminAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/group/admin/remove', payload))
        .map(res => ({ type: Group.ActionTypes.L_REMOVE_ADMIN, payload: res.json() }));

    @Effect() updateGroup$ = this.actions$
        .ofType(Group.ActionTypes.S_UPDATE_GROUP)
        .map((action: Group.S_UpdateGroupAction) => action.payload)
        .switchMap(payload => this.http$.post('/api/group/update', payload))
        .map(res => ({ type: Group.ActionTypes.L_UPDATE_GROUP, payload: res.json() }));

}