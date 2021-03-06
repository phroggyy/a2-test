import {Component} from '@angular/core'
import {User} from "../../models/User";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

    errorMessage: string
    mode = 'Observable'
    user = new User('', '')

    constructor(
        private router: Router,
        private service: AuthService
    ) {}

    register() {
        this.service.register(this.user.email, this.user.password)
            .subscribe(
                (user: User) => {
                    console.log(user)
                    this.user = user
                    this.router.navigate(['/dashboard'])
                },
                (error: any) =>  {
                    console.log(error)
                }
            )
    }

}
