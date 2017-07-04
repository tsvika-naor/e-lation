import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { go } from '@ngrx/router-store';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { FeedService } from '../../shared/providers';
import { ActionTypes as Actions } from '../store';
import { State } from '../../app-store.state';

@Component({
    selector: 'el-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, OnDestroy {
    _id: Observable<ObjectId>;
    bio: Observable<string>;
    rank: Observable<Number>;
    businessAddress: Observable<Address>;
    reviews: Observable<Array<Review>>;
    fields: Observable<Array<Field>>;
    user: Observable<User>;
    userId: ObjectId;
    sub: Subscription;
    activeTab: number;
    writeReview: boolean;
    writePost: boolean;
    newReview: Review;

    constructor(private store$: Store<State>, private route: ActivatedRoute, private feedService: FeedService) {
        this._id = store$.select(state => state.provider._id);
        this.bio = store$.select(state => state.provider.bio);
        this.rank = store$.select(state => state.provider.rank);
        this.businessAddress = store$.select(state => state.provider.businessAddress);
        this.reviews = store$.select(state => state.provider.reviews);
        this.fields = store$.select(state => state.provider.fields);
        this.user = store$.select(state => state.provider.user);
        this.activeTab = 0;
        this.writeReview = false;
        this.writePost = false;
        this.initReview();
    }

    tab(num: number) {
        this.activeTab = num;
    }

    edit($event) {
        this.store$.dispatch(go('/provider/' + $event + '/edit'));
    }

    navigate(id: ObjectId) {
        this.store$.dispatch(go('/user/' + id));
    }

    review() {
        this.activeTab = 0;
        this.writeReview = true;
    }

    post() {
        this.activeTab = 1;
        this.writePost = true;
    }

    follow() {
        //
    }

    submitReview(form: NgForm) {
        this.newReview.user = this.userId;
        this.newReview.text = form.value.text;
        this.newReview.rating = form.value.rating;
        this.newReview.date = new Date(Date.now());
        console.log(this.newReview);
        this.store$.dispatch({type: Actions.S_ADD_REVIEW, payload: {parent: form.value.providerId, child: this.newReview}});
        this.initReview();
    }

    initReview() {
        this.newReview = {
            user: this.userId,
            text: '',
            date: null,
            rating: 0
        };
    }

    newPost(post: Post) {
        this.feedService.newPost(Actions.L_NEW_POST, post);
        this.writePost = false;
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
                .select(state => state.group._id)
                .map(id => ({ paramId: params['id'], storeId: id, userId: null })))
            .switchMap(postData => this.store$
                .select(state => state.auth.userId)
                .map(id => {
                    postData.userId = id;
                    return postData;
                }))
            .subscribe(data => {
                if (data.storeId !== data.paramId) {
                    this.store$.dispatch({ type: Actions.S_GET_PROVIDER, payload: data.paramId });
                }

                this.userId = data.userId || '591b456fac3a880004d698fa';
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
