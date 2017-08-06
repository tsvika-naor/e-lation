import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
    MdCardModule, MdListModule, MdChipsModule, MdIconModule, MdButtonModule,
    MdInputModule, MdCheckboxModule
} from '@angular/material';
import { Http, RequestOptions } from '@angular/http';
import { ShareButtonsModule } from 'ngx-sharebuttons';

import { IfTrimPipe, AddressPipe, GenderPipe, DateOnlyPipe, SpreadPipe } from './pipes';
import { FeedService } from './providers';
import { PostComponent } from './post/post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostFeedComponent } from './post-feed/post-feed.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDetailListComponent } from './people-detail-list/people-detail-list.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MdCardModule,
        MdButtonModule,
        MdListModule,
        MdChipsModule,
        MdIconModule,
        MdInputModule,
        MdCheckboxModule,
        ShareButtonsModule.forRoot()
    ],
    exports: [PostComponent, PeopleListComponent, IfTrimPipe, AddressPipe, GenderPipe, SpreadPipe,
        DateOnlyPipe, NewPostComponent, PeopleDetailListComponent, PostFeedComponent],
    providers: [FeedService],
    declarations: [PostComponent, PeopleListComponent, IfTrimPipe, AddressPipe, GenderPipe, SpreadPipe,
        DateOnlyPipe, NewPostComponent, PeopleDetailListComponent, PostFeedComponent]
})
export class SharedModule { }
