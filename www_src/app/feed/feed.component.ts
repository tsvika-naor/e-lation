import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { State } from '../shared/redux';
import { ActionTypes as Actions } from '../shared/redux/feed';

@Component({
    templateUrl: './feed.component.html'
})
export class FeedComponent {
    posts: Observable<Array<Post>>;
    sub: Subscription;
    userId: ObjectId;

    constructor(private store$: Store<State>, private route: ActivatedRoute) {
        this.posts = store$.select(state => state.feed.posts);
    }

    likePost(id: ObjectId) {
        this.store$.dispatch({ type: Actions.S_LIKE_POST, payload: { parent: id, child: this.userId } });
    }

    sharePost(id: ObjectId) {
        //Do something
    }

    likeComment(id: ObjectId) {
        this.store$.dispatch({ type: Actions.S_LIKE_COMMENT, payload: { parent: id, child: this.userId } });
    }

    likeSubComment(refs: { commentId: ObjectId, subCommentId: ObjectId }) {
        this.store$.dispatch({ type: Actions.S_LIKE_SUBCOMMENT, payload: { parent: refs.subCommentId, child: { parentId: refs.commentId, userId: this.userId } } });
    }

    postComment(comment: UserComment) {
        this.store$.dispatch({ type: Actions.L_POST_COMMENT, payload: comment });
    }

    ngOnInit() {
        this.sub = this.store$.select(state => state.user._id).subscribe(id => {
            this.userId = id || '588dabd60e4ae2358cb66263';
            this.store$.dispatch({ type: Actions.S_GET_FEED, payload: this.userId });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}