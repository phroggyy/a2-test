export class User {
    constructor(
        public email:string,
        protected password:string
    ) {

    }

    setPassword(password:string):void {
        this.password = password
    }
}

