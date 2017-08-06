import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';

import { ActionTypes as Actions } from '../store';
import { FacebookService, GoogleService } from '../providers';
import { State } from '../../app-store.state';

@Component({
    selector: 'el-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
    provider: String;

    constructor(private store$: Store<State>, private fbapi: FacebookService, private gapi: GoogleService) {
        this.provider = localStorage.getItem('provider');

        if (this.provider === 'google') {
            this.gapi.signout().then(() => {
                this.onComplete();
            });
        } else if (this.provider === 'facebook') {
            this.fbapi.logout(() => {
                this.onComplete();
            });
        }
    }

    onComplete() {
        this.store$.dispatch(go('/'));
    }

    ngOnInit() {
        this.store$.dispatch({type: Actions.LOGOUT});
    }
}
