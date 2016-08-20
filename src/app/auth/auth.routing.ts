import { Routes, RouterModule } from '@angular/router';

import {RegisterComponent} from "./register/register.component";

const authRoutes: Routes = [
    // {
    //     path: 'register',
    //     component: RegisterComponent
    // }
];

export const authRouting = RouterModule.forChild(authRoutes);