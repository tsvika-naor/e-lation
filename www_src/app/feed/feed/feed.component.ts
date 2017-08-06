import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { FeedService } from '../../shared/providers';
import { ActionTypes as Actions } from '../store';
import { State } from '../../app-store.state';
// TEST ONLY
import { ActionTypes as NavActions } from '../../nav/store';

@Component({
    selector: 'el-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnDestroy {
    posts: Observable<Array<Post>>;
    sub: Subscription;
    userId: ObjectId;

    constructor(private store$: Store<State>, private route: ActivatedRoute, private feedService: FeedService) {
        this.posts = store$.select(state => state.feed.posts);
    }

    newPost(post: Post) {
        this.feedService.newPost(Actions.L_NEW_POST, post);
    }

    likePost(id: ObjectId) {
        this.feedService.likePost(Actions.L_LIKE_POST, id, this.userId);
    }

    likeComment(id: ObjectId) {
        this.feedService.likeComment(Actions.L_LIKE_COMMENT, id, this.userId);
    }

    likeSubComment(refs: CommentRef) {
        this.feedService.likeSubComment(Actions.L_LIKE_SUBCOMMENT, refs, this.userId);
    }

    postComment(comment: UserComment) {
        this.feedService.postComment(Actions.L_POST_COMMENT, comment);
    }

    ngOnInit() {
        this.sub = this.store$.select(state => state.auth.userId).subscribe(id => {
            this.userId = id || '591b456fac3a880004d698fa';
            this.store$.dispatch({ type: Actions.S_GET_FEED, payload: this.userId });
            // TEST ONLY
            this.store$.dispatch({ type: NavActions.GET_LINKS, payload: this.userId });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
