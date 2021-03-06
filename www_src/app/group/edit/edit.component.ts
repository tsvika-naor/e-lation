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
    /*owner: Observable<User>;
    provider: Observable<Provider>;*/
    name: Observable<String>;
    description: Observable<String>;
    type: Observable<Array<String>>;
    address: Observable<Address>;
    sub: Subscription;
    isNew: Boolean;
    userId: ObjectId;

    constructor(private store$: Store<State>, private route: ActivatedRoute) {
        this._id = store$.select(state => state.group._id);
        this.name = store$.select(state => state.group.name);
        /*this.provider = store$.select(state => state.group.provider);*/
        this.address = store$.select(state => state.group.address);
        this.description = store$.select(state => state.group.description);
        // this.owner = store$.select(state => state.group.owner);
        this.type = store$.select(state => state.group.type);
    }

    cancel(form: NgForm) {
        this.store$.dispatch(go('/group/' + form.value._id));
    }

    save(form: NgForm) {
        const newGroup = form.value;
        newGroup.type = (form.value.type || '').split(', ');

        if (this.isNew) {
            newGroup.owner = this.userId;
            if (typeof newGroup.admins === 'undefined') {
                newGroup.admins = [];
            }
            newGroup.admins.unshift(this.userId);
            this.store$.dispatch({ type: actions.S_NEW_GROUP, payload: newGroup });
        } else {
            this.store$.dispatch({ type: actions.S_UPDATE_GROUP, payload: newGroup });
        }
    }

    ngOnInit() {
        this.sub = this.route.params
            .switchMap(params => this.store$
                .select(state => state.group._id)
                .map(id => ({ paramId: params['id'], storeId: id, userId: null })))
            .switchMap(postData => this.store$
                .select(state => state.auth.userId)
                .map(id => {
                    postData.userId = id;
                    return postData;
                }))
            .subscribe(data => {
                if (data.paramId && data.storeId !== data.paramId) {
                    this.store$.dispatch({ type: actions.S_GET_GROUP, payload: data.paramId });
                }

                this.userId = data.userId || '591b456fac3a880004d698fa';
                this.isNew = (typeof data.paramId === 'undefined' || data.paramId === null);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
