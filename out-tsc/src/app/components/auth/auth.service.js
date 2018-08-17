var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
var appKey = "kid_rkTx5Dqrm";
var appSecret = "4242e34801db43bdb6dd91adeb4d1a02";
var registerUrl = "https://baas.kinvey.com/user/" + appKey;
var loginUrl = "https://baas.kinvey.com/user/" + appKey + "/login";
var logoutUrl = "https://baas.kinvey.com/user/" + appKey + "/_logout";
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    //WE DONT NEEED THIS FUNCTION ANYMORE, FOR THE HEADERS WE MADE AN INTERCEPTOR
    //this function creates the authentication, it can be Basic (when we login or register), Kinvey (when we are logged in)
    AuthService.prototype.createAuthHeaders = function (type) {
        if (type === "Basic") {
            return new HttpHeaders({
                "Authorization": "Basic " + btoa(appKey + ":" + appSecret),
                "Content-Type": 'application/json'
            });
        }
        else {
            return new HttpHeaders({
                "Authorization": "Kinvey " + localStorage.getItem("authtoken"),
                "Content-Type": "application/json"
            });
        }
    };
    AuthService.prototype.login = function (loginModel) {
        return this.http.post(loginUrl, JSON.stringify(loginModel), { headers: this.createAuthHeaders("Basic") });
    };
    AuthService.prototype.register = function (registerModel) {
        return this.http.post(registerUrl, JSON.stringify(registerModel), { headers: this.createAuthHeaders("Basic") });
    };
    AuthService.prototype.logout = function () {
        return this.http.post(logoutUrl, {}, { headers: this.createAuthHeaders("Kinvey") });
    };
    Object.defineProperty(AuthService.prototype, "authtoken", {
        //getter and setter for the authtoken field
        get: function () {
            return this.currentAuthtoken;
        },
        set: function (newAuthtoken) {
            this.currentAuthtoken = newAuthtoken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "username", {
        //getter and setter for the username field
        get: function () {
            return this.currentUsername;
        },
        set: function (newUsername) {
            this.currentUsername = newUsername;
        },
        enumerable: true,
        configurable: true
    });
    //Guards:
    AuthService.prototype.checkIfLoggedIn = function () {
        var loggedIn = this.currentAuthtoken === localStorage.getItem('authtoken');
        //console.log("LOGGEDIN " + loggedIn)
        return loggedIn;
    };
    AuthService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map