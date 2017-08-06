import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';
import { State } from '../../app-store.state';
import { reducer } from '../../app-store.reducers';

@Component({
  selector: 'el-people-detail-list',
  templateUrl: './people-detail-list.component.html',
  styleUrls: ['./people-detail-list.component.css']
})
export class PeopleDetailListComponent {
    @Input() members: Array<User>;
    @Input() admins: Array<User>;
    @Input() userId: ObjectId;
    @Output() promote = new EventEmitter();
    @Output() revoke = new EventEmitter();
    @Output() remove = new EventEmitter();

    constructor(private store$: Store<State>) { }

    navigate(id: ObjectId) {
        this.store$.dispatch(go('/user/' + id));
    }

    promoteAdmin(id: ObjectId) {
        this.promote.emit(id);
    }

    revokeAdmin(id: ObjectId) {
        this.revoke.emit(id);
    }

    removeMember(id: ObjectId) {
        this.remove.emit(id);
    }
}
