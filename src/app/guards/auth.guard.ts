import {Injectable} from "@angular/core";
import {
    CanActivate, ActivatedRouteSnapshot,
    RouterStateSnapshot, Router
} from "@angular/router";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) {}

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean {
        if (! this.auth.check()) {
            this.router.navigate(['login'])
        }

        return this.auth.check();
    }
}