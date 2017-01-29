import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { State } from '../shared/redux';
import { ActionTypes as Actions } from '../shared/redux/feed';

@Component({
    templateUrl: './feed.component.html'
})
export class FeedComponent {
    posts: Observable<Array<Post>>;

    constructor(private store$: Store<State>) {
        this.posts = store$.select(state => state.feed.posts);
    }
    
    likePost(id: ObjectId) {
        this.store$.dispatch({type: '', payload: id});
    }

    sharePost(id: ObjectId) {
        //Do something
    }

    likeComment(id: ObjectId) {
        this.store$.dispatch({type: '', payload: id});
    }

    likeSubComment(payload: any) {
        this.store$.dispatch({type: '', payload: payload});
    }

    postComment(comment: UserComment) {
        this.store$.dispatch({type: '', payload: comment});
    }
}