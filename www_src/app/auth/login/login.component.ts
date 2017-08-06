import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ActionTypes as Actions } from '../store';
import { FacebookService, GoogleService } from '../providers';
import { State } from '../../app-store.state';

@Component({
    selector: 'el-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    error: Observable<string>;
    isNewUser: Observable<boolean>;

    constructor(private store$: Store<State>, private fbapi: FacebookService, private gapi: GoogleService) {
        this.error = store$.select(state => (state.auth.err !== null) ? state.auth.err.message : '');
        this.isNewUser = store$.select(state => state.auth.newUser);
    }

    toggleAction() {
        this.store$.dispatch({ type: Actions.TOGGLE_ACTION });
    }

    fregister() {
        this.fbapi.login((response: LoginResponse) => {
            this.storeToken('facebook', response.authResponse.accessToken);
            this.store$.dispatch({ type: Actions.REGISTER });
        });
    }

    gregister() {
        this.gapi.signin({
            'scope': 'profile email https://www.googleapis.com/auth/contacts ' +
            'https://www.googleapis.com/auth/contacts.readonly ' +
            'https://www.googleapis.com/auth/plus.login ' +
            'https://www.googleapis.com/auth/user.addresses.read ' +
            'https://www.googleapis.com/auth/user.birthday.read ' +
            'https://www.googleapis.com/auth/user.emails.read ' +
            'https://www.googleapis.com/auth/user.phonenumbers.read ' +
            'https://www.googleapis.com/auth/userinfo.email ' +
            'https://www.googleapis.com/auth/userinfo.profile'
        })
            .then((googleUser: GoogleUser) => {
                const response = googleUser.getAuthResponse();
                this.storeToken('google', response.id_token);
                this.store$.dispatch({ type: Actions.REGISTER, payload: response.access_token });
            });
    }

    flogin() {
        this.fbapi.login((response: LoginResponse) => {
            console.log(response);
            this.storeToken('facebook', response.authResponse.accessToken);
            this.store$.dispatch({ type: Actions.LOGIN });
        });
    }

    glogin() {
        this.gapi.signin({
            'scope': 'profile email https://www.googleapis.com/auth/contacts ' +
            'https://www.googleapis.com/auth/contacts.readonly ' +
            'https://www.googleapis.com/auth/plus.login ' +
            'https://www.googleapis.com/auth/user.addresses.read ' +
            'https://www.googleapis.com/auth/user.birthday.read ' +
            'https://www.googleapis.com/auth/user.emails.read ' +
            'https://www.googleapis.com/auth/user.phonenumbers.read ' +
            'https://www.googleapis.com/auth/userinfo.email ' +
            'https://www.googleapis.com/auth/userinfo.profile'
        })
            .then((googleUser: GoogleUser) => {
                this.storeToken('google', googleUser.getAuthResponse().id_token);
                this.store$.dispatch({ type: Actions.LOGIN });
            });
    }

    private storeToken(provider: string, token: string) {
        localStorage.setItem('provider', provider);
        localStorage.setItem('token', token);
    }
}
