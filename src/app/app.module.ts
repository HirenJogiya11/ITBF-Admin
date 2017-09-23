import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SidebarModule} from './sidebar/sidebar.module';
import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {AppRoutes} from './app-routing.module';
import {NavbarModule} from './shared/navbar/navbar.module';
import {FooterModule} from './shared/footer/footer.module';
import {ModalModule} from "ng2-modal";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ToastrModule} from 'toastr-ng2';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {IntroductionComponent} from './introduction/introduction.component';
import {PacksComponent} from './packs/packs.component';
import {AnalyticsComponent} from './analytics/analytics.component';
import {TotaldownloadComponent} from './totaldownload/totaldownload.component';
import {TotalrevenueComponent} from './totalrevenue/totalrevenue.component';
import {UserComponent} from './user/user.component';
import {TourtotaluserComponent} from './tourtotaluser/tourtotaluser.component';
import {TourtotalrevenueComponent} from './tourtotalrevenue/tourtotalrevenue.component';
import {UploaduserComponent} from './uploaduser/uploaduser.component';
import {UsermodalComponent} from './uploaduser/usermodal/usermodal.component';
import {LoginComponent} from './login/login.component';
import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import {AddpackmodalComponent} from './packs/addpackmodal/addpackmodal.component';
import {NewaudiopackComponent} from './packs/newaudiopack/newaudiopack.component';
import {TotalaudioComponent} from './packs/totalaudio/totalaudio.component';
import {DeleteaudioComponent} from './packs/totalaudio/deleteaudio/deleteaudio.component';
import {DeletemodalComponent} from './uploaduser/deletemodal/deletemodal.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// service
import {LoginService} from './services/login.service';
import {AuthGuard} from "./services/authguard.service";
import {AdminGuard} from "./services/adminguard.service";
import {TourGuard} from "./services/tourguard.service";
import {PackService} from './service/pack.service';
import {ModalService} from './service/modal.service';
import {TotalDownloadService} from "./services/totaldownload.service";
import {MyFilterPipe} from "./totaldownload/myfilter.pipe";
import { SiteComponent } from './site/site.component';
import { CreatesiteComponent } from './site/createsite/createsite.component';
import {SiteService} from "./service/site.service";
import { EditaudioComponent } from './packs/editaudio/editaudio.component';
import { DeletesiteComponent } from './site/deletesite/deletesite.component';
import { DeletepacksComponent } from './packs/deletepacks/deletepacks.component';
import { EditsiteComponent } from './site/editsite/editsite.component';


@NgModule({
    imports: [
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
        BootstrapModalModule,
        Ng2SearchPipeModule

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
        DeletemodalComponent,
        AddpackmodalComponent,
        NewaudiopackComponent,
        TotalaudioComponent,
        DeleteaudioComponent,
        MyFilterPipe,
        SiteComponent,
        CreatesiteComponent,
        EditaudioComponent,
        DeletesiteComponent,
        DeletepacksComponent,
        EditsiteComponent

    ],
    providers: [
        PackService,
        ModalService,
        LoginService,
        TotalDownloadService,
        AuthGuard,
        AdminGuard,
        TourGuard,
        SiteService],
    bootstrap: [AppComponent],
    entryComponents: [
        AddpackmodalComponent,
        NewaudiopackComponent,
        TotalaudioComponent,
        DeleteaudioComponent,
        UsermodalComponent,
        DeletemodalComponent,
        CreatesiteComponent,
        EditaudioComponent,
        DeletesiteComponent,
        DeletepacksComponent,
        EditsiteComponent
    ]
})
export class AppModule {
}
