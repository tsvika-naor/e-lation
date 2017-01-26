import { Routes } from '@angular/router';

import { LoginComponent } from '../../login/login.component';
import { UserPageComponent } from '../../userPage/userPage.component';

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
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ];