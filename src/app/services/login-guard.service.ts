import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

import { LoginService } from "./login.service";



@Injectable()
export class LogInGuardService implements CanActivate {

    
    constructor(private _logInService:LoginService){

    }

    canActivate() {
        const user = this._logInService.getLoggedInUser()
        if(user == null){
            return false;
        }
        return true;
    }
    
}