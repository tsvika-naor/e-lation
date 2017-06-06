import { Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

export const providerRoutes: Routes = [
    {
        path: 'provider/:id',
        component: ViewComponent
    },
    {
        path: 'provider/:id/edit',
        component: EditComponent
    },
    {
        path: 'provider/new',
        component: EditComponent
    }
];
