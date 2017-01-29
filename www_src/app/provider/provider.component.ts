import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

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

    constructor(private store$: Store<State>) {
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
}