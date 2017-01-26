import { Routes } from '@angular/router';

import { LoginComponent } from '../../login/login.component';
import { UserPageComponent } from '../../userPage/userPage.component';
import { GroupPageComponent } from '../../groupPage/groupPage.component';

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
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ];