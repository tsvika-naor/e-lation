import { Routes } from '@angular/router';

import { LoginComponent } from '../../login/login.component';
import { UserPageComponent } from '../../userPage/userPage.component';
import { GroupPageComponent } from '../../groupPage/groupPage.component';
import { EventPageComponent } from '../../eventPage/eventPage.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'user',
        component: UserPageComponent
    },
    {
        path: 'group',
        component: GroupPageComponent
    },
    {
        path: 'event',
        component: EventPageComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];