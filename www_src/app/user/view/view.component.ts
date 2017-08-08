import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { go } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { FeedService } from '../../shared/providers/feed/feed.service';
import { ActionTypes as Actions } from '../store';
import { State } from '../../app-store.state';

@Component({
    selector: 'el-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, OnDestroy {
    _id: Observable<ObjectId>;
    firstName: Observable<String>;
    lastName: Observable<String>;
    email: Observable<String>;
    phone: Observable<String>;
    gender: Observable<number>;
    interests: Observable<Array<String>>;
    birthday: Observable<Date>;
    avatar: Observable<MediaObject>;
    address: Observable<Address>;
    // friends: Observable<Array<User>>;
    followers: Observable<Array<User>>;
    posts: Observable<Array<Post>>;
    isProvider: Observable<Boolean>;
    userId: ObjectId;
    sub: Subscription;
    activeTab: number;
    writePost: boolean;

    constructor(private store$: Store<State>, private route: ActivatedRoute, private feedService: FeedService) {
        this._id = store$.select(state => state.user._id);
        this.firstName = store$.select(state => state.user.firstName);
        this.lastName = store$.select(state => state.user.lastName);
        this.email = store$.select(state => state.user.email);
        this.phone = store$.select(state => state.user.phone);
        this.gender = store$.select(state => state.user.gender);
        this.interests = store$.select(state => state.user.interests);
        this.birthday = store$.select(state => state.user.birthday);
        this.avatar = store$.select(state => state.user.avatar);
        this.address = store$.select(state => state.user.address);
        // this.friends = store$.select(state => state.user.friends);
        this.followers = store$.select(state => state.user.followers);
        this.posts = store$.select(state => state.user.posts);
        this.isProvider = store$.select(state => state.user.isProvider);
        this.activeTab = 0;
        this.writePost = false;
    }

    tab(num: number) {
        this.activeTab = num;
    }

    edit($event) {
        this.store$.dispatch(go('/user/' + $event + '/edit'));
    }

    navigate(id: ObjectId) {
        this.store$.dispatch(go('/user/' + id));
    }

    post() {
        this.activeTab = 0;
        this.writePost = true;
    }

    follow(id: ObjectId) {
        this.store$.dispatch({type: Actions.S_FOLLOW_USER, payload: {parent: id, child: this.userId}});
    }

    unfollow(id: ObjectId) {
        this.store$.dispatch({type: Actions.S_UNFOLLOW_USER, payload: {parent: id, child: this.userId}});
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
                .select(state => state.user._id)
                .map(id => ({ paramId: params['id'], storeId: id, userId: null })))
            .switchMap(postData => this.store$
                .select(state => state.auth.userId)
                .map(id => {
                    postData.userId = id;
                    return postData;
                }))
            .subscribe(data => {
                if (data.storeId !== data.paramId) {
                    this.store$.dispatch({ type: Actions.S_GET_USER, payload: data.paramId });
                }

                this.userId = data.userId || '591b456fac3a880004d698fa';
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
