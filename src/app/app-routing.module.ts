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
import {AuthGuard} from "./services/authguard.service";

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
          canActivate: [AuthGuard],
        component: DashboardComponent
      },

      {
        path: 'introduction',
          canActivate: [AuthGuard],
        component: IntroductionComponent
      },
      {
        path: 'packs',
          canActivate: [AuthGuard],
        component: PacksComponent
      },
      // {
      //   path: 'analytics',
      //   component: AnalyticsComponent
      // },
      {
        path: 'totaldownload',
          canActivate: [AuthGuard],
        component: TotaldownloadComponent
      },
      {
        path: 'totalrevenue',
          canActivate: [AuthGuard],
        component: TotalrevenueComponent
      },
      {
        path: 'user',
          canActivate: [AuthGuard],
        component: UserComponent
      },
      {
        path: 'uploaduser',
          canActivate: [AuthGuard],
        component: UploaduserComponent
      },
      {
        path: 'touruser',
          canActivate: [AuthGuard],
        component: TourtotaluserComponent
      },
      {
        path: 'tourRevenue',
          canActivate: [AuthGuard],
        component: TourtotalrevenueComponent
      }

    ]
  },


    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full',
    },
    { path: '**', component: LoginComponent },
  {
    path : '404',
    component : PagenotfoundComponent
  }

];
