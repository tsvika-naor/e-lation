import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ActionTypes as actions } from '../store';
import { State } from '../../app-store.state';

@Component({
    selector: 'el-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    _id: Observable<ObjectId>;
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
    isProvider: Boolean;

    constructor(private store$: Store<State>) {
        this._id = store$.select(state => state.user._id);
        this.firstName = store$.select(state => state.user.firstName);
        this.lastName = store$.select(state => state.user.lastName);
        this.email = store$.select(state => state.user.email);
        this.phone = store$.select(state => state.user.phone);
        this.gender = store$.select(state => state.user.gender);
        // this.interests = store$.select(state => state.user.interests);
        this.birthday = store$.select(state => state.user.birthday);
        this.avatar = store$.select(state => state.user.avatar);
        this.address = store$.select(state => state.user.address);
        // this.friends = store$.select(state => state.user.friends);
        // this.isProvider = store$.select(state => state.user.isProvider);
    }

    register(form: NgForm) {
        this.store$.dispatch({ type: actions.SAVE_USER, payload: { user: form.value } });
        console.log(form.value);
    }
}
