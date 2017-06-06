import { Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

export const eventRoutes: Routes = [
    {
        path: 'event/:id',
        component: ViewComponent
    },
    {
        path: 'event/:id/edit',
        component: EditComponent
    },
    {
        path: 'event/new',
        component: EditComponent
    }
];
