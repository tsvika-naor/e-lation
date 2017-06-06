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
    bio: Observable<string>;
    businessAddress: Observable<Address>;
    sub: Subscription;
    isNew: Boolean;

    constructor(private store$: Store<State>, private route: ActivatedRoute) {
        this._id = store$.select(state => state.user._id);
        this.bio = store$.select(state => state.provider.bio);
        this.businessAddress = store$.select(state => state.provider.businessAddress);
    }

    cancel(form: NgForm) {
        this.store$.dispatch(go('/provider/' + form.value._id));
    }

    save(form: NgForm) {
        // this.store$.dispatch({ type: actions.S_PROVIDER_UPDATE, payload: form.value });
    }

    ngOnInit() {
        /*this.sub = this.route.params
            .switchMap(params => this.store$
                .select(state => state.provider._id)
                .map(id => ({ paramId: params['id'], storeId: id })))
            .subscribe(data => {
                if (data.storeId !== data.paramId) {
                    this.store$.dispatch({ type: actions.S_GET_PROVIDER, payload: data.paramId });
                }

                this.isNew = (typeof data.paramId === 'undefined' || data.paramId === null);
            });*/
    }

    ngOnDestroy() {
        // this.sub.unsubscribe();
    }
}