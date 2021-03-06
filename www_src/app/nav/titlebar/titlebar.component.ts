import 'rxjs/add/operator/debounceTime';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MdIconRegistry } from '@angular/material';
import { go } from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ActionTypes as actions } from '../store';
import { State } from '../../app-store.state';

@Component({
    selector: 'el-nav-titlebar',
    templateUrl: './titlebar.component.html',
    styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent implements OnInit, OnDestroy {
    authenticated: Observable<boolean>;
    results: Observable<SearchResult>;
    searchBar: FormControl;
    sub: Subscription;

    constructor(private store$: Store<State>, iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
        this.authenticated = store$.select(state => state.auth.authenticated);
        this.results = store$.select(state => state.nav.searchResults);
        this.searchBar = new FormControl();
        iconRegistry.addSvgIcon(
            'e-logo',
            sanitizer.bypassSecurityTrustResourceUrl('assets/e-logo.svg')
        );
    }

    goTo(page: String, object: DataClass) {
        this.store$.dispatch(go('/' + page + (object ? '/' + object._id : '')));
    }

    logout() {
        this.store$.dispatch(go('/logout'));
    }

    ngOnInit() {
        this.sub = this.searchBar.valueChanges
            .debounceTime(500)
            .subscribe(val => {
                if (val !== '') {
                    this.store$.dispatch({ type: actions.GET_RESULTS, payload: val });
                } else {
                    this.store$.dispatch({ type: actions.CLEAR_RESULTS });
                }
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
