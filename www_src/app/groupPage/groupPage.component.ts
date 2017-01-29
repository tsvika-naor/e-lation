import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { State } from '../shared/redux'
import { ActionTypes as Actions } from '../shared/redux/group'

@Component({
    templateUrl: './groupPage.component.html'
})
export class GroupPageComponent {
    _id: Observable<ObjectId>;
    owner: Observable<User>;
    provider: Observable<Provider>;
    admins: Observable<Array<User>>;
    members: Observable<Array<User>>;
    name: Observable<String>;
    description: Observable<String>;
    groupType: Observable<Array<String>>;
    address: Observable<Address>;

    constructor(private store$: Store<State>) {
        this._id = store$.select(state => state.group._id);
        this.name = store$.select(state => state.group.name);
        this.admins = store$.select(state => state.group.admins);
        this.members = store$.select(state => state.group.members);
        this.provider = store$.select(state => state.group.provider);
        this.address = store$.select(state => state.group.address);
        this.description = store$.select(state => state.group.description);
        this.owner = store$.select(state => state.group.owner);
        this.groupType = store$.select(state => state.group.groupType);
    }
}
