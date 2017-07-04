import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { State } from '../../app-store.state';

@Component({
  selector: 'el-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.css']
})
export class PostFeedComponent {
    @Input() posts: Array<Post>;
    @Input() userId: ObjectId;
    @Input() panel: boolean;
    @Input() show: boolean;
    @Output() newPost = new EventEmitter();
    @Output() newComment = new EventEmitter();
    @Output() postLiked = new EventEmitter();
    @Output() commentLiked = new EventEmitter();
    @Output() subCommentLiked = new EventEmitter();
    showNewPost: boolean;

    constructor() { }

    submitPost(post: Post) {
        this.newPost.emit(post);
        this.showNewPost = false;
    }

    likePost(id: ObjectId) {
        this.postLiked.emit(id);
    }

    likeComment(id: ObjectId) {
        this.commentLiked.emit(id);
    }

    likeSubComment(refs: CommentRef) {
        this.subCommentLiked.emit(refs);
    }

    postComment(comment: UserComment) {
        this.newComment.emit(comment);
    }
}
