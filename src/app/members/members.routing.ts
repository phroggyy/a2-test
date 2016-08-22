import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "../guards/auth.guard";
import {AuthService} from "../auth/auth.service";

const memberRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    }
];

export const membersRoutingProviders: any[] = [
    AuthGuard,
    AuthService
]

export const membersRouting = RouterModule.forChild(memberRoutes);