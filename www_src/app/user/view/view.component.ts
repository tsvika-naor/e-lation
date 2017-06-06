import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { go } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ActionTypes as actions } from '../store';
import { State } from '../../app-store.state';

@Component({
    selector: 'el-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, OnDestroy {
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
    isProvider: Observable<Boolean>;
    sub: Subscription;

    constructor(private store$: Store<State>, private route: ActivatedRoute) {
        this._id = store$.select(state => state.user._id);
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

    edit($event) {
        this.store$.dispatch(go('/user/' + $event + '/edit'));
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
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
