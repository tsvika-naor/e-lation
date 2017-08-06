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
    owner: Observable<User>;
    provider: Observable<Provider>;
    admins: Observable<Array<User>>;
    members: Observable<Array<User>>;
    name: Observable<String>;
    description: Observable<String>;
    startDate: Observable<Date>;
    endDate: Observable<Date>;
    media: Observable<Array<MediaObject>>;
    type: Observable<Array<String>>;
    private: Observable<Boolean>;
    address: Observable<Address>;
    posts: Observable<Array<Post>>;
    sub: Subscription;
    isNew: Boolean;
    userId: ObjectId;

    constructor(private store$: Store<State>, private route: ActivatedRoute) {
        this._id = store$.select(state => state.event._id);
        /*this.owner = store$.select(state => state.event.owner);
        this.provider = store$.select(state => state.event.provider);
        this.admins = store$.select(state => state.event.admins);
        this.members = store$.select(state => state.event.members);*/
        this.name = store$.select(state => state.event.name);
        this.description = store$.select(state => state.event.description);
        this.startDate = store$.select(state => state.event.startDate);
        this.endDate = store$.select(state => state.event.endDate);
        this.address = store$.select(state => state.event.address);
        // this.media = store$.select(state => state.event.media);
        this.type = store$.select(state => state.group.type);
        // this.posts = store$.select(state => state.event.posts);
        this.private = store$.select(state => state.event.private);
    }

    cancel(form: NgForm) {
        this.store$.dispatch(go('/event/' + form.value._id));
    }

    save(form: NgForm) {
        const newEvent = form.value;
        newEvent.type = (form.value.type || '').split(', ');

        if (this.isNew) {
            newEvent.owner = this.userId;
            newEvent.admins.unshift(this.userId);
            this.store$.dispatch({ type: actions.S_NEW_EVENT, payload: newEvent });
        } else {
            this.store$.dispatch({ type: actions.S_EDIT_EVENT, payload: newEvent });
        }
    }

    ngOnInit() {
        this.sub = this.route.params
            .switchMap(params => this.store$
                .select(state => state.event._id)
                .map(id => ({ paramId: params['id'], storeId: id, userId: null })))
            .switchMap(postData => this.store$
                .select(state => state.auth.userId)
                .map(id => {
                    postData.userId = id;
                    return postData;
                }))
            .subscribe(data => {
                if (data.paramId && data.storeId !== data.paramId) {
                    this.store$.dispatch({ type: actions.S_GET_EVENT, payload: data.paramId });
                }

                this.userId = data.userId || '591b456fac3a880004d698fa';
                this.isNew = (typeof data.paramId === 'undefined' || data.paramId === null);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
