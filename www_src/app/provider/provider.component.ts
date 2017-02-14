import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { State } from '../shared/redux'
import { ActionTypes as Actions } from '../shared/redux/provider'

@Component({
    templateUrl: './provider.component.html'
})
export class ProviderComponent {
    bio: Observable<string>;
    rank: Observable<Number>;
    businessAddress: Observable<Address>;
    reviews: Observable<Array<Review>>;
    user: Observable<User>;
    showContact: Observable<boolean>;
    sub: Subscription;

    constructor(private store$: Store<State>, private route: ActivatedRoute) {
        this.bio = store$.select(state => state.provider.bio);
        this.rank = store$.select(state => state.provider.rank);
        this.businessAddress = store$.select(state => state.provider.businessAddress);
        this.reviews = store$.select(state => state.provider.reviews);
        this.user = store$.select(state => state.provider.user);
        this.showContact = store$.select(state => state.provider.showContact);
    }

    toggleContact() {
        this.store$.dispatch({type: Actions.TOGGLE_CONTACT});
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.store$.dispatch({type: Actions.S_GET_PROVIDER, payload: params['id']});
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}