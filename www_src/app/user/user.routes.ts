import { Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

export const userRoutes: Routes = [
    {
        path: 'user/:id',
        component: ViewComponent
    },
    {
        path: 'user/:id/edit',
        component: EditComponent
    },
    {
        path: 'user/new',
        component: EditComponent
    }
];
