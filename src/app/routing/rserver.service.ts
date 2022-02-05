import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root" 
})
export class RServerService {
  users: { id: number, name: string }[] = [
    {id: 1,name: "Bob"},
    {id: 2,name: "Max"},
    {id: 3,name: "Hanna"},
    {id: 4,name: "Felix"}
  ];
  servers: { id: number,name: string, status: string }[] = [
    { id:1,name: "production",status: "active"},
    {id:2,name: "test",status: "unknown"}
  ];

  updateServer(serverId: number): void {
  }
}