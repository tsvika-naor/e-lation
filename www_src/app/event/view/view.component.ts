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
    owner: Observable<User>;
    provider: Observable<Provider>;
    admins: Observable<Array<User>>;
    members: Observable<Array<User>>;
    name: Observable<String>;
    avatar: Observable<MediaObject>;
    description: Observable<String>;
    startDate: Observable<Date>;
    endDate: Observable<Date>;
    media: Observable<Array<MediaObject>>;
    type: Observable<Array<String>>;
    private: Observable<Boolean>;
    address: Observable<Address>;
    posts: Observable<Array<Post>>;
    userId: ObjectId;
    sub: Subscription;
    activeTab: number;
    writePost: boolean;


    constructor(private store$: Store<State>, private route: ActivatedRoute, private feedService: FeedService) {
        this._id = store$.select(state => state.event._id);
        this.owner = store$.select(state => state.event.owner);
        this.provider = store$.select(state => state.event.provider);
        this.admins = store$.select(state => state.event.admins);
        this.members = store$.select(state => state.event.members);
        this.name = store$.select(state => state.event.name);
        this.avatar = store$.select(state => state.event.avatar);
        this.description = store$.select(state => state.event.description);
        this.startDate = store$.select(state => state.event.startDate);
        this.endDate = store$.select(state => state.event.endDate);
        this.address = store$.select(state => state.event.address);
        this.media = store$.select(state => state.event.media);
        this.type = store$.select(state => state.event.type);
        this.posts = store$.select(state => state.event.posts);
        this.private = store$.select(state => state.event.private);
        this.activeTab = 0;
        this.writePost = false;
    }

    edit($event) {
        this.store$.dispatch(go('/event/' + $event + '/edit'));
    }

    tab(num: number) {
        this.activeTab = num;
    }

    post() {
        this.activeTab = 2;
        this.writePost = true;
    }

    join(id: ObjectId) {
        this.store$.dispatch({ type: Actions.S_ADD_MEMBER, payload: { parent: id, child: this.userId } });
    }

    leaveAdmin(id: ObjectId) {
        this.store$.dispatch({ type: Actions.S_REMOVE_ADMIN, payload: { parent: id, child: this.userId } });
    }

    leaveMember(user: User | ObjectId, id: ObjectId) {
        this.store$.dispatch({ type: Actions.S_REMOVE_MEMBER, payload: { parent: id, child: user } });
    }

    promoteAdmin(user: User | ObjectId, id: ObjectId) {
        this.store$.dispatch({ type: Actions.S_PROMOTE_ADMIN, payload: { parent: id, child: user } });
    }

    revokeAdmin(user: User | ObjectId, id: ObjectId) {
        this.store$.dispatch({ type: Actions.S_REVOKE_ADMIN, payload: { parent: id, child: user } });
    }

    newPost(post: Post, id: ObjectId) {
        this.feedService.newPost(Actions.L_NEW_POST, post, id, 'event');
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
                .select(state => state.event._id)
                .map(id => ({ paramId: params['id'], storeId: id, userId: null })))
            .switchMap(postData => this.store$
                .select(state => state.auth.userId)
                .map(id => {
                    postData.userId = id;
                    return postData;
                }))
            .subscribe(data => {
                if (data.storeId !== data.paramId) {
                    this.store$.dispatch({ type: Actions.S_GET_EVENT, payload: data.paramId });
                }

                this.userId = data.userId || '591b456fac3a880004d698fa';
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
