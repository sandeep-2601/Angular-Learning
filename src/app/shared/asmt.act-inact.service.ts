import { EventEmitter, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ActiveAndInactive {
    activeUsers: string[] = ["Henry", "Jose"];
    inactiveUsers: string[] = ["Brad", "Max"];

    setToInactive = new EventEmitter<string>();
    setToActive = new EventEmitter<string>();
    setInactive(name: string) {
        this.activeUsers.splice(this.activeUsers.indexOf(name), 1);
        this.inactiveUsers.push(name);
    }
    setActive(name: string) {
        this.inactiveUsers.splice(this.inactiveUsers.indexOf(name), 1);
        this.activeUsers.push(name);
    }
}
