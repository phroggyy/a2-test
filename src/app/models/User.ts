export class User {
    constructor(
        public email:string,
        public password:string = ''
    ) {

    }

    setPassword(password:string):void {
        this.password = password
    }
}

