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
import {ModalModule} from 'ng2-modal';
import {DashboardComponent} from './dashboard/dashboard.component';
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
import {TotalDownloadService} from './services/totaldownload.service';
import { AnalyticUserComponent } from './analytic-user/analytic-user.component';
import {IntroductionService} from './services/introduction.service';
import {UserAdminService} from './services/userAdmin.service';
import { AdduserComponent } from './user/adduser/adduser.component';
// import {MyFilterPipe} from "./totaldownload/myfilter.pipe";
import { SiteComponent } from './site/site.component';
import { CreatesiteComponent } from './site/createsite/createsite.component';
import {SiteService} from "./service/site.service";
import { EditaudioComponent } from './packs/editaudio/editaudio.component';
import { DeletesiteComponent } from './site/deletesite/deletesite.component';
import { DeletepacksComponent } from './packs/deletepacks/deletepacks.component';
import { EditsiteComponent } from './site/editsite/editsite.component';
import {EdittotalsiteComponent} from "./packs/totalaudio/edittotalsite/edittotalsite.component";
import { BulkuploadComponent } from './bulkupload/bulkupload.component';
import { LanguageComponent } from './language/language.component';
import { CreatelanguageComponent } from './language/createlanguage/createlanguage.component';
import { EditlanguageComponent } from './language/editlanguage/editlanguage.component';
import { DeletelanguageComponent } from './language/deletelanguage/deletelanguage.component';
import {LanguageService} from "./services/language.service";
import { EdituserComponent } from './user/edituser/edituser.component';
import { DeleteuserComponent } from './user/deleteuser/deleteuser.component';


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
        // MyFilterPipe,
        SiteComponent,
        CreatesiteComponent,
        EditaudioComponent,
        DeletesiteComponent,
        DeletepacksComponent,
        EditsiteComponent,
        AnalyticUserComponent,
        AdduserComponent,
        BulkuploadComponent,
        LanguageComponent,
        CreatelanguageComponent,
        EditlanguageComponent,
        DeletelanguageComponent,
        EdittotalsiteComponent,
        EdituserComponent,
        DeleteuserComponent

    ],
    providers: [
        PackService,
        ModalService,
        LoginService,
        TotalDownloadService,
        AuthGuard,
        AdminGuard,
        TourGuard,
        IntroductionService,
        UserAdminService,
        SiteService,
        LanguageService],
    bootstrap: [AppComponent],
    entryComponents: [
        AddpackmodalComponent,
        NewaudiopackComponent,
        TotalaudioComponent,
        DeleteaudioComponent,
        UsermodalComponent,
        DeletemodalComponent,
        AdduserComponent,
        DeletemodalComponent,
        CreatesiteComponent,
        EditaudioComponent,
        DeletesiteComponent,
        DeletepacksComponent,
        EditsiteComponent,
        CreatelanguageComponent,
        EditlanguageComponent,
        DeletelanguageComponent,
        EditsiteComponent,
        EdittotalsiteComponent,
        EdituserComponent,
        DeleteuserComponent
    ]
})
export class AppModule {
}
