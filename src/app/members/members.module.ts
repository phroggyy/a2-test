import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {membersRouting, membersRoutingProviders} from "./members.routing";
import {CreateBackupFormComponent} from "./dashboard/create-backup-form/create-backup-form.component";

@NgModule({
    imports: [
        membersRouting
    ],
    declarations: [
        DashboardComponent,
        CreateBackupFormComponent
    ],
    providers: [
        membersRoutingProviders
    ]
})
export class MembersModule
{

}

