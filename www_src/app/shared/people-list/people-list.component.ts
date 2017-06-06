import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';
import { State } from '../../app-store.state';

@Component({
  selector: 'el-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
    @Input() members: Array<User>;
    @Input() admins: Array<User>;

    constructor(private store$: Store<State>) { }

    navigate(id: ObjectId) {
        this.store$.dispatch(go('/user/' + id));
    }
}
