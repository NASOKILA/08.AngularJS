import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpEventType,
    HttpEvent
} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {


    constructor(private toastr: ToastrService,
        private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler)
        : Observable<HttpEvent<any>> {

        let currentUser = JSON.parse(localStorage.getItem("currentUser"));

        if (currentUser && currentUser.token) {

            req = req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${currentUser.token}`
                }
            })
        }


        return next.handle(req)
            .pipe(
                tap((res: any) => {

                    if (res instanceof HttpResponse && res.body.token) {
                        let user = res.body;
                        this.save(user);
                    }

                    if (res instanceof HttpResponse && res.body.success && res.url.endsWith("signup")) {
                        this.toastr.success(res.body.message, "success");
                        this.router.navigate(["/signin"]);
                    }

                    if (res instanceof HttpResponse && res.body.success && res.url.endsWith("login")) {
                        this.toastr.success(res.body.message, "success");
                        this.router.navigate(["/furniture/all"]);
                    }

                    if (res instanceof HttpResponse && res.body.success && res.url.endsWith("create")) {
                        this.toastr.success(res.body.message, "success");
                        this.router.navigate(["/furniture/all"]);
                    }

                })
            );
    }

    save(user) {
        localStorage.setItem("currentUser", JSON.stringify({
            "username": user.user.name,
            "token": user.token
        }));
    }
}

