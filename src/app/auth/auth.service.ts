import {Injectable} from "@angular/core";
import {User} from "../models/User";

@Injectable()
export class AuthService {
    register(user: User) {
        return user
    }
}