import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class LoggingService {
    logStatusChange(account:{name: string,status: string}): void{
        console.log(`An existing account ${account.name} status has been updated to ${account.status}`);
    }
    logAccountCreated(account:{name: string,status: string}): void{
        console.log(`A new account ${account.name} has been created with status set as ${account.status} `);
    }
}