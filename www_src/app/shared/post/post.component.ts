import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'el-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
    @Input() post: Post;
    @Input() max: Number;
    @Input() hideComments: boolean;
    @Output() newComment = new EventEmitter();
    @Output() postLiked = new EventEmitter();
    @Output() postShared = new EventEmitter();
    @Output() commentLiked = new EventEmitter();
    @Output() subCommentLiked = new EventEmitter();
    trim: boolean;
    addComment: boolean;
    comment: UserComment;
    likes: number;

    constructor() {
        this.max = this.max || 0;
        this.trim = (this.max > 0);
        this.hideComments = this.hideComments || false;
        this.comment = {
            subject: this.post,
            text: '',
            date: null,
            likes: [],
            comments: []
        };
        this.likes = 0;
    }

    showComments(id: ObjectId) {
        this.hideComments = false;
        this.addComment = true;
    }

    showChildren(id: ObjectId) {
        const index = this.post.comments.findIndex(comment => comment._id === id);
        this.post.comments[index].showChildren = true;
    }

    likePost(id: ObjectId) {
        // this.postLiked.emit(id);
        this.likes++;
    }

    sharePost(id: ObjectId) {
        this.postShared.emit(id);
    }

    likeComment(id: ObjectId) {
        this.commentLiked.emit(id);
    }

    likeSubComment(id: ObjectId, sub_id: ObjectId) {
        this.subCommentLiked.emit({ commentId: id, subCommentId: sub_id });
    }

    postComment() {
        this.comment.date = new Date(Date.now());
        this.newComment.emit(this.comment);
        this.comment.text = '';
    }
}
