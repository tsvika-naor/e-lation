import { Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

export const groupRoutes: Routes = [
    {
        path: 'group/new',
        component: EditComponent
    },
    {
        path: 'group/:id',
        component: ViewComponent
    },
    {
        path: 'group/:id/edit',
        component: EditComponent
    }
];
