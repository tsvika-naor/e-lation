/// <reference path="./google.service.d.ts" />
declare var gapi: gapi;

import { Injectable, Inject, Optional, OpaqueToken } from '@angular/core';

export let GOOG_ID = new OpaqueToken('GOOG.ID');

@Injectable()
export class GoogleService {
    private client_id: string;
    private auth2: gapi.auth2.GoogleAuth;

    constructor(@Inject(GOOG_ID) client_id: string) {
        this.client_id = client_id + client_id.endsWith(".apps.googleusercontent.com") ? "" : ".apps.googleusercontent.com";
    }

    public initCustomLogin(buttonID: string, onSuccess: LoginSuccessCallback, onFailure: FailureCallback) {
        var btn = document.getElementById(buttonID);
        this.auth2.attachClickHandler(btn, {}, onSuccess, onFailure);
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
        user = user || this.auth2.currentUser.get();
        return user.getAuthResponse().id_token;
    }

    public signin(options?: SignInOptions) {
        return this.auth2.signin(options);
    }

    public signout() {
        return this.auth2.signout();
    }
}