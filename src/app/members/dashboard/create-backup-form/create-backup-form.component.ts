import {Component, Output, EventEmitter} from "@angular/core";
import {BackupForm} from "../../../models/BackupForm";

@Component({
    'selector': 'create-backup-form',
//     'template': `
// <main>
//     <div class="row">
//         <div class="column">
//             <input type="text" placeholder="Host/ip address">
//         </div>
//         <div class="column">
//             <input type="text" placeholder="Database">
//         </div>
//     </div>
//     <div class="row">
//         <div class="column">
//             <input type="text" placeholder="Username">
//         </div>
//         <div class="column">
//             <input type="text" placeholder="Password">
//         </div>
//     </div>
// </main>
// `,
    'templateUrl': './create-backup-form.component.html'
})
export class CreateBackupFormComponent
{
    @Output() onSubmittedForm: EventEmitter<BackupForm> = new EventEmitter<BackupForm>()

    form: BackupForm = new BackupForm()

    createBackup() {
        this.onSubmittedForm.emit(this.form)
    }
}

