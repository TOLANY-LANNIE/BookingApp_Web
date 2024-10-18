import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
    declarations:[
        AppComponent
    ],
    imports:[
        BrowserModule,
        RouterModule,
        HttpClientModule,
        BrowserAnimationsModule,
        
    ],
    providers:[
    
    provideAnimationsAsync()
  ],
    bootstrap:[AppComponent]
    
})
export class AppModule { }

