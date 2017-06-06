import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent]
})
export class FeedModule { }
