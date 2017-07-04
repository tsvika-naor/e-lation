import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '../../../app-store.state';
import { ActionTypes as Actions } from '../../store';

@Injectable()
export class FeedService {

    constructor(private store$: Store<State>) { }

    newPost(action: string, post: Post, parentId?: ObjectId, type?: String) {
        const data = { parent: parentId, type: type, child: post };
        this.store$.dispatch({ type: Actions.S_NEW_POST, payload: { action: action, data: data } });
    }

    likePost(action: string, id: ObjectId, userId: ObjectId) {
        const data = { parent: id, child: userId };
        this.store$.dispatch({ type: Actions.S_LIKE_POST, payload: { action: action, data: data } });
    }

    likeComment(action: string, id: ObjectId, userId: ObjectId) {
        const data = { parent: id, child: userId };
        this.store$.dispatch({ type: Actions.S_LIKE_COMMENT, payload: { action: action, data: data } });
    }

    likeSubComment(action: string, refs: CommentRef, userId: ObjectId) {
        const data = {
            parent: refs.subCommentId,
            child: {
                parentId: refs.commentId,
                userId: userId
            }
        };
        this.store$.dispatch({ type: Actions.S_LIKE_SUBCOMMENT, payload: { action: action, data: data } });
    }

    postComment(action: string, comment: UserComment) {
        this.store$.dispatch({ type: Actions.S_POST_COMMENT, payload: { action: action, data: comment } });
    }

}
