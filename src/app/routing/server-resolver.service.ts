import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { RServerService } from "./rserver.service";

interface Server{
    id: number,
    name: string,
    status:string
}
@Injectable({
    providedIn:'root'
})
export class ServerResolver implements Resolve<Server> {
    constructor(private rserverService: RServerService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> {
        return this.rserverService.servers[+route.params['id']-1];
    }
}