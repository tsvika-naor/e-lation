import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { SharedModule } from '../shared';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [FeedComponent, PostDetailComponent],
  exports: [FeedComponent, PostDetailComponent]
})
export class FeedModule { }
