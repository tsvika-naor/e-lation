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

        if (typeof(gapi) == 'undefined' || gapi == null) {
            console.warn("gapi not preloaded");
            // Asynchronously load the G+ SDK.
            var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.defer = true; po.id = "gapi";
            po.src = 'https://apis.google.com/js/platform.js?onload=init';
            var s = document.getElementById('gapi'); s.parentNode.insertBefore(po, s);
        } else {
            init();
        }

        function init() {
            this.auth2 = gapi.auth2.init({
                client_id: this.client_id,
                fetch_basic_profile: true
            });
        }
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