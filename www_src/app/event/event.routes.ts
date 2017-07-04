import { Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

export const eventRoutes: Routes = [
    {
        path: 'event/new',
        component: EditComponent
    },
    {
        path: 'event/:id',
        component: ViewComponent
    },
    {
        path: 'event/:id/edit',
        component: EditComponent
    }
];
