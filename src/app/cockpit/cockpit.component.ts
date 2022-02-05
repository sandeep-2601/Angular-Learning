import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  duplicate: boolean = false;
  serverName: string = "";
  serverContent: string = "";
  constructor() { }

  @Output() serverEvent = new EventEmitter<{ serverName: string, serverContent: string, duplicate: boolean }>();
  // @ViewChild('refName') refName; viewChild demonstration
  ngOnInit(): void {  
  }

  addServer(event: Event): void {
    this.duplicate = (<HTMLElement>event.target).innerText == "Add Server" ? false : true;
    this.serverEvent.emit({serverName:this.serverName,serverContent:this.serverContent,duplicate:this.duplicate});
  }
  
  // // local referencing
  // dummyFunction(refName: HTMLInputElement): void {
  //   console.log(refName.value);
  // }

  // //viewChild demo
  // viewChildDummyFunction(): void {
  //   console.log(this.refName.nativeElement.value);
  // }
}
