import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    
    status: string = "offline";
    serverId: number = 10;

    constructor() {
        this.status = Math.random() > 0.5 ?"offline":"online";    
        console.log(this.status);
    }

    getServerId() {
        return this.serverId;
    }

    getColor() {
        return this.status == "offline" ? "mistyrose" : "palegreen";
    }

}