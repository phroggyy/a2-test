import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing } from './app.routing'

import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import {AuthModule} from "./auth/auth.module";
import {MembersModule} from "./members/members.module";
import {
    LocalStorageService,
    LOCAL_STORAGE_SERVICE_CONFIG
} from "angular-2-local-storage";

const localStorageConfig: any = {
    prefix: 'spaceships'
}

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        AuthModule,
        MembersModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent
    ],
    providers: [
        LocalStorageService,
        { provide: LOCAL_STORAGE_SERVICE_CONFIG, useValue: localStorageConfig}
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}