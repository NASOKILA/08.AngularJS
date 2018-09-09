import { Injectable } from "@angular/core";
import * as firebase from 'Firebase';
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public token: string = localStorage.getItem('token')
        ? localStorage.getItem('token')
        : null;

    public currentEmail: string = localStorage.getItem('email')
        ? localStorage.getItem('email')
        : null;

    constructor(
        private toastr: ToastrService,
        private router: Router) { }

    signUp(email: string, password: string): void {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(data => {
                this.toastr.success('User Created Successfully, please login!', 'Success!')

                this.router.navigate(['/auth/signin']);
            })
            .catch(err => {
                console.log(err)
                this.toastr.error(err.message, 'Error!')
            });
    }

    signIn(email: string, password: string): void {

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(data => {
                this.saveToken();

                this.toastr.success('User Login Successful!', 'Success!')

                this.router.navigate(['/recipes/start']);
            })
            .catch(err => {
                console.log(err);
                this.toastr.error(err.message, 'Error!')
            });
    }

    logout() {
        firebase.auth().signOut()
            .then(() => {

                this.token = null;
                this.currentEmail = null;
                localStorage.clear()
                this.toastr.success('User Logout Successful!', 'Success!')
                this.router.navigate(['/auth/signin'])
            })
            .catch(err => {
                console.log(err)
                this.toastr.error(err.message, 'Error!')
            });
    }

    saveToken() {

        firebase.auth().currentUser.getIdToken()
            .then(t => {
                this.token = t;
                localStorage.setItem('token', this.token);

                this.currentEmail = firebase.auth().currentUser.email;
                localStorage.setItem('email', this.currentEmail);
            })
            .catch(err => console.log(err))

        return this.token;
    }

    getToken() {
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}