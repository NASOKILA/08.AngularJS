
import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticatedRoute implements CanActivate {
    canActivate() {
        return false;
    }
}