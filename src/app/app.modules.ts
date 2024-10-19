import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalInterceptor } from './interceptors/http.interceptor';
import { AppRoutingModule } from './app.routes';

import { LoginComponent } from './features/auth/login/login.component';
import { SignUpComponent } from './features/auth/sign-up/sign-up.component';
import { DashboardComponent } from './features/customer/dashboard/dashboard.component';
import { ConflictListComponent } from './features/mananger/conflict-list/conflict-list.component';
import { LoaderComponent } from './features/loader/loader.component';
import { SideMenuComponent } from './utils/side-menu/side-menu.component';
import { OrderListComponent } from './features/operator/order-list/order-list.component';


import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon'
import { MatListModule} from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';


import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TooltipModule } from 'primeng/tooltip';

import { environment } from '../environment/environment.dev';
@NgModule({ 
    declarations: [
        AppComponent,
        LoginComponent,
        SignUpComponent,
        DashboardComponent,
        ConflictListComponent,
        LoaderComponent,   
        SideMenuComponent,
        OrderListComponent,
        
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        BrowserAnimationsModule,

        MatProgressSpinnerModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatMenuModule,
        HttpClientModule,
        MatTooltipModule,

        AvatarModule,
        AvatarGroupModule,
        TooltipModule,
        
    ], 
        
    providers: 
    [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: GlobalInterceptor,
            multi: true,
        },

    ] 
})
export class AppModule { }

