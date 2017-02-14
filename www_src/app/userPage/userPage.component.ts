import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { State } from '../shared/redux';
import { ActionTypes as Actions } from '../shared/redux/user';

@Component({
    templateUrl: './userPage.component.html'
})
export class UserPageComponent {
    firstName: Observable<String>;
    lastName: Observable<String>;
    email: Observable<String>;
    phone: Observable<String>;
    gender: Observable<number>;
    interests: Observable<Array<String>>;
    birthday: Observable<Date>;
    avatar: Observable<MediaObject>;
    address: Observable<Address>;
    friends: Observable<Array<User>>;
    isProvider: Observable<Boolean>;
    sub: Subscription;

    constructor(private store$: Store<State>, private route: ActivatedRoute) {
        this.firstName = store$.select(state => state.user.firstName);
        this.lastName = store$.select(state => state.user.lastName);
        this.email = store$.select(state => state.user.email);
        this.phone = store$.select(state => state.user.phone);
        this.gender = store$.select(state => state.user.gender);
        this.interests = store$.select(state => state.user.interests);
        this.birthday = store$.select(state => state.user.birthday);
        this.avatar = store$.select(state => state.user.avatar);
        this.address = store$.select(state => state.user.address);
        this.friends = store$.select(state => state.user.friends);
        this.isProvider = store$.select(state => state.user.isProvider);
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.store$.dispatch({ type: Actions.S_GET_USER, payload: params['id'] });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}