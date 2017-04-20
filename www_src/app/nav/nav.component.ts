import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Store, Action } from '@ngrx/store';
import { go } from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { State } from '../shared/redux';
import { ActionTypes as AuthActions } from '../shared/redux/auth';
import { ActionTypes as InfoActions } from '../shared/redux/info';

@Component({
    selector: 'el-nav',
    templateUrl: './nav.component.html'
})
export class NavComponent {
    authenticated: Observable<boolean>;
    results: Observable<Array<String>>;
    searchBar: FormControl;
    sub: Subscription;


    constructor(private store$: Store<State>) {
        this.authenticated = store$.select(state => state.auth.authenticated);
        this.results = store$.select(state => state.info.searchResults);
        this.searchBar = new FormControl();
    }

    goToProvider(provider: Provider) {
        this.store$.dispatch(go('/provider/'+provider._id));
    }

    goToUser(user: User) {
        this.store$.dispatch(go('/user/'+user._id));
    }

    goToGroup(group: Group) {
        this.store$.dispatch(go('/group/'+group._id));
    }

    goToEvent(event: GeoEvent) {
        this.store$.dispatch(go('/event/'+event._id));
    }

    goToPost(post: Post) {
        this.store$.dispatch(go('/post/'+post._id));
    }

    ngOnInit() {
        this.sub = this.searchBar.valueChanges
            .startWith(null)
            .debounceTime(500)
            .subscribe(val => this.store$.dispatch({ type: InfoActions.S_GET_RESULTS, payload: val }));
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}