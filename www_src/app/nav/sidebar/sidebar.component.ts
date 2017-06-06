import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { go } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { State } from '../../app-store.state';

@Component({
    selector: 'el-nav-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {

    userLinks: Observable<Array<Link>>;
    providers: Observable<Array<Provider>>;
    userId: ObjectId;
    groups: Observable<Array<Group>>;
    events: Observable<Array<GeoEvent>>;
    isAuthenticated: Observable<Boolean>;
    sub: Subscription;

    constructor(private store$: Store<State>) {
        this.userLinks = store$.select(state => state.nav.userPages.userLinks);
        this.providers = store$.select(state => state.nav.userPages.providers);
        this.groups = store$.select(state => state.nav.userPages.groups);
        this.events = store$.select(state => state.nav.userPages.events);
        this.isAuthenticated = store$.select(state => state.auth.authenticated);
    }

    goTo(page: String, param: ObjectId | String) {
        this.store$.dispatch(go('/' + page + (param ? '/' + param : '')));
    }

    ngOnInit() {
        this.sub = this.store$.select(state => state.user._id).subscribe(id => {
            this.userId = id;
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
