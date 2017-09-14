import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { IntroductionComponent } from './introduction/introduction.component';
import { PacksComponent } from './packs/packs.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { TotaldownloadComponent } from './totaldownload/totaldownload.component';
import { TotalrevenueComponent } from './totalrevenue/totalrevenue.component';
import { UserComponent } from './user/user.component';
import { TourtotaluserComponent } from './tourtotaluser/tourtotaluser.component';
import { TourtotalrevenueComponent } from './tourtotalrevenue/tourtotalrevenue.component';
import { UploaduserComponent } from './uploaduser/uploaduser.component';
import {LoginComponent} from './login/login.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },

      {
        path: 'introduction',
        component: IntroductionComponent
      },
      {
        path: 'packs',
        component: PacksComponent
      },
      // {
      //   path: 'analytics',
      //   component: AnalyticsComponent
      // },
      {
        path: 'totaldownload',
        component: TotaldownloadComponent
      },
      {
        path: 'totalrevenue',
        component: TotalrevenueComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'uploaduser',
        component: UploaduserComponent
      },
      {
        path: 'touruser',
        component: TourtotaluserComponent
      },
      {
        path: 'tourRevenue',
        component: TourtotalrevenueComponent
      }

    ]
  },


    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full',
    },
  {
    path : '404',
    component : PagenotfoundComponent
  }

];
