import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderStandartComponent } from './header/header-standart/header-standart.component';
import { HeaderBaseComponent } from './header/header-base/header-base.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FooterComponent } from './footer/footer.component';
import { HealthTestComponent } from './health-test/health-test.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RestorePasswordComponent } from './restore-password/restore-password.component';
import { ProfileComponent } from './profile/profile.component';
import { LanguageSelectorComponent } from './layout/language-selector/language-selector.component';
import {NgbDropdownModule, NgbTabsetModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {ScriptLoaderService} from './_services/script-loader.service';
import {NgbdPopoverBasicModule} from './layout/popover/popover-basic.module';
import {DropdownComponent} from './layout/dropdown/dropdown.component';
import {AuthGuard} from './_services/guard.service';
import {UserService} from './_services/user.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {QuestionWizardService} from './_services/questionWizard.service' 
import {QuestionWizardComponent} from './question-wizard/question-wizard.component' 
import {DataSharingService} from './_services/data-sharing.service' 
import {HealthCheckResultComponent} from './health-check-result/health-check-result.component' 





@NgModule({
  declarations: [
    AppComponent,
    HeaderStandartComponent,
    HeaderBaseComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FooterComponent,
    HealthTestComponent,
    LoginComponent,
    SignUpComponent,
    RestorePasswordComponent,
    ProfileComponent,
    LanguageSelectorComponent,
    DropdownComponent,
    QuestionWizardComponent,
    HealthCheckResultComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptionHighlightModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard]},
      { path: 'counter', component: CounterComponent, canActivate: [AuthGuard] },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'health-test', component: HealthTestComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'restore-password', component: RestorePasswordComponent },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: 'question-wizard', component: QuestionWizardComponent, canActivate: [AuthGuard] },
      { path: 'health-check-result', component: HealthCheckResultComponent, canActivate: [AuthGuard] },
      { path: '**', component: LoginComponent },
    ]),
    // ng-bootstrap modules
    NgbDropdownModule,
		NgbTabsetModule,
    NgbTooltipModule,
    NgbdPopoverBasicModule,
    NgSelectModule
  ],
  exports: [
    LanguageSelectorComponent
  ],
  providers: [
    ScriptLoaderService, 
    AuthGuard, 
    UserService,
    QuestionWizardService,
    DataSharingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
