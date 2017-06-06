import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { authRoutes } from './auth';
import { eventRoutes } from './event';
import { feedRoutes } from './feed';
import { groupRoutes } from './group';
import { providerRoutes } from './provider';
import { userRoutes } from './user';

const baseRoute: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];

let routes: Routes = baseRoute;
routes = [].concat(authRoutes, eventRoutes, feedRoutes, groupRoutes, providerRoutes, userRoutes, baseRoute);

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
