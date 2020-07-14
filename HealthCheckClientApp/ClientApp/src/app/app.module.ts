import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
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




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
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
    DropdownComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'health-test', component: HealthTestComponent },
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'restore-password', component: RestorePasswordComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '**', component: LoginComponent },
    ]),
    // ng-bootstrap modules
    NgbDropdownModule,
		NgbTabsetModule,
    NgbTooltipModule,
    NgbdPopoverBasicModule
  ],
  exports: [
    LanguageSelectorComponent
  ],
  providers: [ScriptLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
