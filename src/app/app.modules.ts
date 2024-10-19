import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { LoginComponent } from './features/auth/login/login.component';
import { SignUpComponent } from './features/auth/sign-up/sign-up.component';
import { DashboardComponent } from './features/customer/dashboard/dashboard.component';


@NgModule({ 
    declarations: [
        AppComponent,
        LoginComponent,
        SignUpComponent,
        DashboardComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        RouterModule,
        BrowserAnimationsModule], providers: [
        provideAnimationsAsync(),
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }

