/// <reference path="../../../typings/index.d.ts" />

import { Component, Input } from '@angular/core';

@Component({
    selector: 'el-people-list',
    templateUrl: './peopleList.component.html'
})
export class PeopleListComponent {
    @Input() members: Array<User>;
    @Input() admins: Array<User>;
    
    constructor() { }
}