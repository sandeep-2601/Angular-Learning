import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class AuthService {
    isLoggedIn: boolean = false;

    isAuthenticated(){
        const promise = new Promise(
        (resolve,reject) => {
            setTimeout(()=>{
                resolve(this.isLoggedIn)
            },800)
        }
        );
        return promise;
    }

    login(): void {
        this.isLoggedIn = true;
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}