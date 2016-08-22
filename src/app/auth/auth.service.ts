import {Injectable} from "@angular/core";
import {User} from "../models/User";
import {Observable} from "rxjs/Rx";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {LocalStorageService} from "angular-2-local-storage";

@Injectable()
export class AuthService {

    private registerUrl = 'https://tr885c4vp2.execute-api.eu-west-1.amazonaws.com/dev/register'
    private loginUrl = 'https://tr885c4vp2.execute-api.eu-west-1.amazonaws.com/dev/login'

    constructor(private http: Http, private localStorage: LocalStorageService) {}

    register(email: string, password: string): Observable<User> {
        let body = JSON.stringify({email: email, password: password})
        let headers = new Headers({ 'Content-Type': 'application/json' })
        let options = new RequestOptions({ headers: headers })

        return this.http.post(this.registerUrl, body, options)
            .map( res => { return this.extractData(res) } )
            .catch(this.handleError)
    }

    login(email: string, password: string): Observable<User> {
        let body = JSON.stringify({email: email, password: password})
        let headers = new Headers({ 'Content-Type': 'application/json' })
        let options = new RequestOptions({ headers: headers })

        return this.http.post(this.loginUrl, body, options)
            .map( res => { return this.extractData(res) })
            .catch(this.handleError)
    }

    check(): boolean {
        return null !== this.localStorage.get('cognito-token')
    }

    guest(): boolean {
        return !this.check()
    }

    private extractData(res: Response) {
        let body = JSON.parse(res.json())
        console.log(this.localStorage)

        if (body.errorMessage || ! body.login) {
            let message:any = JSON.parse(body.errorMessage)

            return Observable.throw(message.message)
        }


        this.localStorage.set('cognito-id', body.identityId)
        this.localStorage.set('cognito-token', body.token)


        if (body.user) {
            return new User(body.user.email)
        }

        return {}
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}