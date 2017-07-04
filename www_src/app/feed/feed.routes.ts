import { Routes } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { FeedComponent } from './feed/feed.component';

export const feedRoutes: Routes = [
    {
        path: 'feed',
        component: FeedComponent
    },
    {
        path: 'post/:id',
        component: PostDetailComponent
    }
];
