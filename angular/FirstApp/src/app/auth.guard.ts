import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard{
    
    constructor(private router: Router){}

    canActivate(){
        const isAuthenticated:boolean = true;
        if(isAuthenticated){
            return true;
        }
        else{
            console.log("Intruder allert!")
            this.router.navigate(['/']);
            return false;
        }
    }


}