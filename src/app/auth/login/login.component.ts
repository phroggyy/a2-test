import {Component} from '@angular/core'
import {User} from "../../models/User";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    errorMessage: string
    user: User = new User('')

    constructor(
        private router: Router,
        private service: AuthService
    ) {}

    login() {
        this.service.login(this.user.email, this.user.password)
            .subscribe(
                (user: User) => {
                    console.log(user)
                    this.router.navigate(['/dashboard'])
                },
                (error: any) =>  {
                    console.log(error)
                }
            )
    }

}
