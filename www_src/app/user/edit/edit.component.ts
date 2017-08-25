import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ActionTypes as actions } from '../store';
import { State } from '../../app-store.state';
import { go } from '@ngrx/router-store';

@Component({
    selector: 'el-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
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
    isProvider: Observable<Boolean>;
    sub: Subscription;
    isNew: Boolean;

    constructor(private store$: Store<State>, private route: ActivatedRoute) {
        this._id = store$.select(state => state.user._id);
        this.firstName = store$.select(state => state.user.firstName);
        this.lastName = store$.select(state => state.user.lastName);
        this.email = store$.select(state => state.user.email);
        this.phone = store$.select(state => state.user.phone);
        this.gender = store$.select(state => state.user.gender);
        // this.interests = store$.select(state => state.user.interests);
        this.birthday = store$.select(state => state.user.birthday);
        // this.avatar = store$.select(state => state.user.avatar);
        this.address = store$.select(state => state.user.address);
        // this.isProvider = store$.select(state => state.user.isProvider);
    }

    cancel(form: NgForm) {
        console.log(form.value);
        this.store$.dispatch(go('/user/' + form.value._id));
    }

    save(form: NgForm) {
        console.log(form.value);
        this.store$.dispatch({ type: actions.S_USER_UPDATE, payload: form.value });
    }

    ngOnInit() {
        this.sub = this.route.params
            .switchMap(params => this.store$
                .select(state => state.user._id)
                .map(id => ({ paramId: params['id'], storeId: id })))
            .subscribe(data => {
                if (data.storeId !== data.paramId) {
                    this.store$.dispatch({ type: actions.S_GET_USER, payload: data.paramId });
                }

                this.isNew = (typeof data.paramId === 'undefined' || data.paramId === null);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
