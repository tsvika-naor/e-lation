/// <reference path="../../../typings/index.d.ts" />

import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';

import { State } from '../shared/redux';

@Component({
    selector: 'el-people-list',
    templateUrl: './peopleList.component.html'
})
export class PeopleListComponent {
    @Input() members: Array<User>;
    @Input() admins: Array<User>;
    
    constructor(private store$: Store<State>) { }

    navigate(id: ObjectId) {
        this.store$.dispatch(go('/user/'+id));
    }
}