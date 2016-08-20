import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing } from './app.routing'

import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import {AuthModule} from "./auth/auth.module";

@NgModule({
    imports: [
        BrowserModule,
        AuthModule
        routing,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}