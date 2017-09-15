import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import {FormsModule } from '@angular/forms';
import {SidebarModule} from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AppRoutes } from './app-routing.module';
import {NavbarModule} from './shared/navbar/navbar.module';
import {FooterModule} from './shared/footer/footer.module';
import {ModalModule} from "ng2-modal";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BootstrapModalModule} from 'ng2-bootstrap-modal';

import { ToastrModule } from 'toastr-ng2';
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
import { UsermodalComponent } from './uploaduser/usermodal/usermodal.component';
import {LoginComponent} from './login/login.component';
// service
import {LoginService} from './services/login.service';
import { DeletemodalComponent } from './uploaduser/deletemodal/deletemodal.component'
import {AuthGuard} from "./services/authguard.service";


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    HttpModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    ModalModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
      BootstrapModalModule

  ],
  declarations: [
    AppComponent,

    AdminLayoutComponent,
    AuthLayoutComponent,
    DashboardComponent,
    PagenotfoundComponent,

    IntroductionComponent,
    PacksComponent,
    AnalyticsComponent,
    TotaldownloadComponent,
    TotalrevenueComponent,
    UserComponent,
    TourtotaluserComponent,
    TourtotalrevenueComponent,
    UploaduserComponent,
      UsermodalComponent,
      LoginComponent,
      DeletemodalComponent
  ],
    providers:[LoginService, AuthGuard],
  bootstrap:    [ AppComponent ],
    entryComponents: [
        UsermodalComponent,
        DeletemodalComponent
    ]
})
export class AppModule { }
