
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
import {AdminGuard} from "./services/adminguard.service";
import {TourGuard} from "./services/tourguard.service";
import {AnalyticUserComponent} from "./analytic-user/analytic-user.component";
import {SiteComponent} from "./site/site.component";
import {BulkuploadComponent} from "./bulkupload/bulkupload.component";

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
          canActivate: [AuthGuard, AdminGuard],
        component: DashboardComponent
      },
      {
        path: 'introduction',
          canActivate: [AuthGuard, TourGuard],
        component: IntroductionComponent
      },
      {
        path: 'packs',
          canActivate: [AuthGuard, TourGuard],
        component: PacksComponent
      },
      {
        path: 'site',
        canActivate: [AuthGuard, TourGuard],
        component: SiteComponent
      },
      // {
      //   path: 'analytics',
      //   component: AnalyticsComponent
      // },
      {
        path: 'totaldownload',
          canActivate: [AuthGuard, TourGuard],
        component: TotaldownloadComponent
      },
      {
        path: 'totalrevenue',
          canActivate: [AuthGuard, TourGuard],
        component: TotalrevenueComponent
      },
      {
        path: 'user',
          canActivate: [AuthGuard, TourGuard],
        component: UserComponent
      },
        {
            path: 'analyticUser',
            canActivate: [AuthGuard, TourGuard],
            component: AnalyticUserComponent
        },
      {
        path: 'uploaduser',
          canActivate: [AuthGuard, AdminGuard],
        component: UploaduserComponent
      },
      {
        path: 'touruser',
          canActivate: [AuthGuard, AdminGuard],
        component: TourtotaluserComponent
      },
      {
        path: 'tourRevenue',
          canActivate: [AuthGuard, AdminGuard],
        component: TourtotalrevenueComponent
      },
        {
            path: 'bulkupload',
            canActivate: [AuthGuard, AdminGuard],
            component:  BulkuploadComponent
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
