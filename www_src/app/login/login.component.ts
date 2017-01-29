import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { State } from '../shared/redux'
import { ActionTypes as Actions } from '../shared/redux/auth'

@Component({
    selector: 'el-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    private error: Observable<String>;

    constructor(private store$: Store<State>) {
        this.error = store$.select(state => { return (state.auth.err !== null) ? state.auth.err.message : "" });
    }

    login() {
        this.store$.dispatch({ type: Actions.LOGIN });
    }
}