import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable({providedIn:'root'})
export class AccountService {

    accountServers: {name:string,status: string}[] = [
        {
            name:"server 1",
            status:"active"
        },
        {
            name:"server 2",
            status:"active"
        }
    ];

    statusChangeEvent = new EventEmitter<string>();
    constructor(private loggingService: LoggingService) {}

    accountDetails(name: string, status: string): void {
        this.accountServers.push({name: name,status: status});
        this.loggingService.logAccountCreated({name:name,status:status});   
     }

    updateDetails(id: number, newStatus: string ): void {
        this.accountServers[id].status = newStatus;
        this.loggingService.logStatusChange({name:this.accountServers[id].name,status:newStatus});
    }
}