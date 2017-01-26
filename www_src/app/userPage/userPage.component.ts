/// <reference path="../../../typings/index.d.ts" />
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { State } from '../shared/redux'
import { ActionTypes as AuthActions } from '../shared/redux/auth'

enum Gender {
    Male,
    Female
}

@Component({
    templateUrl: './userPage.component.html'
})
export class UserPageComponent {
  firstName: Observable<String>;
  lastName:   Observable<String>;
  email:   Observable<String>;
  phone:   Observable<String>;
  gender:   Observable<number>;
  birthday: Observable<Date>;
  avatar: Observable<any>
  address: Observable<Address>;
  isProvider: Observable<Boolean>;
  provider: Observable<Provider>;

    constructor(private store$: Store<State>) {
        //this.authenticated = store$.let(AuthStore.getStatus);  //AuthStore change to GroupStore
        this.firstName  = store$.select(state => state.user.firstName);
        this.lastName = store$.select(state => state.user.lastName);
        this.email = store$.select(state => state.user.email);
        this.phone = store$.select(state => state.user.phone);
        this.gender = store$.select(state => state.user.gender);
        this.birthday = store$.select(state => state.user.birthday);
        this.avatar = store$.select(state => state.user.avatar);
        this.address = store$.select(state => state.user.address);
        this.isProvider = store$.select(state => state.user.isProvider);
    }
}