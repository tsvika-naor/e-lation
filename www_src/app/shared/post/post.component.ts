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
    @Input() userId: ObjectId;
    @Output() newComment = new EventEmitter();
    @Output() postLiked = new EventEmitter();
    @Output() commentLiked = new EventEmitter();
    @Output() subCommentLiked = new EventEmitter();
    trim: boolean;
    addComment: boolean;
    comment: UserComment;
    share: boolean;
    urlBase: string;
    shareText: string;

    constructor() {
        this.max = this.max || 0;
        this.trim = (this.max > 0);
        console.log(this.hideComments);
        this.hideComments = this.hideComments || !(this.post && this.post.comments.length > 0 && this.max > 0);
        console.log(this.hideComments);
        this.comment = {
            subject: null,
            text: '',
            date: null,
            likes: [],
            comments: []
        };
        this.share = false;
        this.urlBase = 'https://e-lation.herokuapp.com/post/';
        this.shareText = 'Check out this post on e-lation';
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
        console.log(id);
        this.postLiked.emit(id);
    }

    sharePost(id: ObjectId) {
        this.share = !this.share;
    }

    likeComment(id: ObjectId) {
        this.commentLiked.emit(id);
    }

    likeSubComment(id: ObjectId, sub_id: ObjectId) {
        this.subCommentLiked.emit({ commentId: id, subCommentId: sub_id });
    }

    postComment() {
        this.comment.date = new Date(Date.now());
        this.comment.subject = this.post._id;
        console.log(this.comment);
        this.newComment.emit(this.comment);
        this.comment.text = '';
    }
}
