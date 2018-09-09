export class RegisterModel {

    constructor(
        public username: String,
        public password: String,
        public firstName: String,
        public lastName: String,
        public email: String,
        public age?: Number,
    ) { }
}