import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asmt-three',
  templateUrl: './asmt-three.component.html',
  styleUrls: ['./asmt-three.component.css']
})
export class AsmtThreeComponent {
  serverIndex: number = 0;
  display:string ="block";
  servers = []

  onDisplay(): void {
    this.serverIndex++;
    this.servers.push(new Date());
    this.display = this.display == "none"?"block":"none";
  }
}
