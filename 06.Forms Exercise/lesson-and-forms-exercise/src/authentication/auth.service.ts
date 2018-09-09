
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { LoginModel } from "./models/login.model";
import { RegisterModel } from "./models/register.model";


const appKey: string = "kid_rJuhpTmSQ";
const appSecret: string = "416f44c08dc14aed88d60ff532356490";
const registerUrl: string = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl: string = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl: string = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable()
export class AuthService {

    private currentAuthtoken: string;
    private currentUsername: string;

    constructor(private http: HttpClient) { }




    public login(loginModel: LoginModel) {
        return this.http.post(
            loginUrl,
            JSON.stringify(loginModel),
        );
    }

    public register(registerModel: RegisterModel) {
        return this.http.post(
            registerUrl,
            JSON.stringify(registerModel),
        );
    }

    public logout() {
        return this.http.post(
            logoutUrl,
            {},
        );
    }

    get authtoken() {
        return this.currentAuthtoken;
    }
    set authtoken(newAuthtoken: string) {
        this.currentAuthtoken = newAuthtoken;
    }

    get username() {
        return this.currentUsername;
    }
    set username(newUsername: string) {
        this.currentUsername = newUsername;
    }

    checkIfLoggedIn() {
        let loggedIn = this.currentAuthtoken === localStorage.getItem('authtoken');
        return loggedIn;
    }
}
