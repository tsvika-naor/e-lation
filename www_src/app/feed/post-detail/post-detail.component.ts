import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { FeedService } from '../../shared/providers';
import { ActionTypes as Actions } from '../store';
import { State } from '../../app-store.state';

@Component({
    selector: 'el-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit, OnDestroy {
    post: Observable<Post>;
    sub: Subscription;
    userId: ObjectId;

    constructor(private store$: Store<State>, private route: ActivatedRoute, private feedService: FeedService) {
        this.post = store$.select(state => state.feed.post);
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
        this.sub = this.route.params
            .switchMap(params => this.store$
                .select(state => state.feed.post._id)
                .map(id => ({ paramId: params['id'], storeId: id, userId: null })))
            .switchMap(postData => this.store$
                .select(state => state.user._id)
                .map(id => {
                    postData.userId = id;
                    return postData;
                }))
            .subscribe(data => {
                if (data.storeId !== data.paramId) {
                    this.store$.dispatch({ type: Actions.S_GET_POST, payload: data.paramId });
                }

                this.userId = data.userId || '591b456fac3a880004d698fa';
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
