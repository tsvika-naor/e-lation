/// <reference path="./google.service.d.ts" />
declare var gapi: gapi;

import { Injectable, Inject, Optional, OpaqueToken } from '@angular/core';

export let GOOG_ID = new OpaqueToken('GOOG.ID');

@Injectable()
export class GoogleService {
    private _client_id: string;
    private GoogleAuth: gapi.auth2.GoogleAuth;

    constructor( @Inject(GOOG_ID) client_id: string) {
        this._client_id = client_id + (client_id.endsWith('.apps.googleusercontent.com') ? '' : '.apps.googleusercontent.com');
        gapi.load('auth2', () => {
            this.GoogleAuth = gapi.auth2.init({ client_id: this._client_id });
            console.log('init: ' + this._client_id);
        });
    }

    public initCustomLogin(buttonID: string, options: SignInOptions, onSuccess: LoginSuccessCallback, onFailure: FailureCallback) {
        const btn = document.getElementById(buttonID);
        this.GoogleAuth.attachClickHandler(btn, options || {}, onSuccess, onFailure);
    }

    public initLogin(buttonID: string, onSuccess: LoginSuccessCallback, onFailure: FailureCallback) {
        gapi.signin2.render(buttonID, {
            'scope': 'profile email',
            'longtitle': true,
            'onsuccess': onSuccess,
            'onfailure': onFailure
        });
    }

    public getIdToken(user?: GoogleUser) {
        user = user || this.GoogleAuth.currentUser.get();
        return user.getAuthResponse().id_token;
    }

    public signin(options?: SignInOptions) {
        return this.GoogleAuth.signIn(options);
    }

    public signout() {
        return this.GoogleAuth.signOut();
    }
}