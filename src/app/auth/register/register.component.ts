import {Component} from '@angular/core'
import {User} from "../../models/User";
import {AuthService} from "../auth.service";

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

    constructor(
        private service: AuthService
    ) {}

    user = new User('', '')

    register() {
        this.service.register(this.user)
    }

}
