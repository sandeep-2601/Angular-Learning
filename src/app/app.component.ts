import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // name: string = 'max';
  // title: string = 'app';
  // isActive: boolean = false;
  // serverStatus: string = "No server was created.....";
  // serverName: string;
  // servers = []  
  // constructor() {
  //   setTimeout(()=>{
  //     this.isActive = !this.isActive;
  //   },2000)
  // }
  // onServerCreate(): void {
  //   this.servers.push(this.serverName);
  // }
  // onServerNameUpdate(event: Event): void {
  //   this.serverStatus = (<HTMLInputElement>event.target).value;
  // }
  displayNumber: number;
  serverElements: { name: string, content: string, duplicate: boolean }[] = [];

  addServer(event: { serverName: string, serverContent: string, duplicate: boolean }): void {
    if (event.serverName != "" && event.serverContent != "")
      this.serverElements.push({ name: event.serverName, content: event.serverContent, duplicate: event.duplicate })
  }

  updateDisplay(event: number): void{
    this.displayNumber = event;
  }
}
