import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import {RegisterComponent} from "./register/register.component";
import {authRouting} from "./auth.routing";
import {AuthService} from "./auth.service";
import {LoginComponent} from "./login/login.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        authRouting
    ],
    declarations: [
        RegisterComponent,
        LoginComponent
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule { }