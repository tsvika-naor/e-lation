import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { go } from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';

import { State } from '../shared/redux'
import { ActionTypes as Actions } from '../shared/redux/auth'

@Component({
    selector: 'el-nav',
    templateUrl: './nav.component.html'
})
export class NavComponent {
    authenticated : Observable<boolean>;

    constructor(private store$: Store<State>) {
        this.authenticated = store$.select(state => state.auth.authenticated);
    }
}