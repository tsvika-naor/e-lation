import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'el-new-post',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
    @Input() userId: ObjectId;
    @Output() submit = new EventEmitter();
    newPost: any;

    constructor() {
        this.init();
    }

    post() {
        this.newPost.date = new Date(Date.now());
        this.newPost.tags = this.newPost.tagString.split(', ');
        this.newPost.user = this.userId;
        delete this.newPost.tagString;
        console.log(this.newPost);
        this.submit.emit(this.newPost);
        this.init();
    }

    init() {
        this.newPost = {
            user: this.userId,
            title: '',
            body: '',
            date: null,
            tagString: '',
            tags: [],
            likes: [],
            comments: []
        };
    }
}
