import { Injectable } from '@angular/core';
import { RequestOptionsArgs, Response, Headers } from '@angular/http';
import { AuthHttp, JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
    jwtHelper: JwtHelper = new JwtHelper();

    constructor(public authHttp: AuthHttp) { }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        if (options) {
            options.headers = this.appendProvider(options.headers);
        }

        return this.authHttp.get(url, options);
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        if (options) {
            options.headers = this.appendProvider(options.headers);
        }

        return this.authHttp.post(url, body, options);
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        if (options) {
            options.headers = this.appendProvider(options.headers);
        }

        return this.authHttp.put(url, body, options);
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        if (options) {
            options.headers = this.appendProvider(options.headers);
        }

        return this.authHttp.delete(url, options);
    }

    patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        if (options) {
            options.headers = this.appendProvider(options.headers);
        }

        return this.authHttp.patch(url, body, options);
    }

    head(url: string, options?: RequestOptionsArgs): Observable<Response> {
        if (options) {
            options.headers = this.appendProvider(options.headers);
        }

        return this.authHttp.head(url, options);
    }

    options(url: string, options?: RequestOptionsArgs): Observable<Response> {
        if (options) {
            options.headers = this.appendProvider(options.headers);
        }

        return this.authHttp.options(url, options);
    }

    tokenSubscription(): Observable<string> {
        return this.authHttp.tokenStream;
    }

    decodeToken(token?: string): any {
        token = token || localStorage.getItem('token');

        return this.jwtHelper.decodeToken(token);
    }

    getTokenExpirationDate(token?: string): Date {
        token = token || localStorage.getItem('token');

        return this.jwtHelper.getTokenExpirationDate(token);
    }

    isTokenExpired(token?: string): boolean {
        token = token || localStorage.getItem('token');

        return this.jwtHelper.isTokenExpired(token);
    }

    private appendProvider(headers: Headers): Headers {
        const provider = localStorage.getItem('provider');
        headers = headers || new Headers();
        headers.append('provider', provider);

        return headers;
    }
}
