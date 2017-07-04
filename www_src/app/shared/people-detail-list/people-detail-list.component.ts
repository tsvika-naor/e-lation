import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';
import { State } from '../../app-store.state';

@Component({
  selector: 'el-people-detail-list',
  templateUrl: './people-detail-list.component.html',
  styleUrls: ['./people-detail-list.component.css']
})
export class PeopleDetailListComponent {
    @Input() members: Array<User>;
    @Input() admins: Array<User>;

    constructor(private store$: Store<State>) { }

    navigate(id: ObjectId) {
        this.store$.dispatch(go('/user/' + id));
    }
}
