import { Component, OnInit } from '@angular/core';
import { ActiveAndInactive } from '../shared/asmt.act-inact.service';

@Component({
  selector: 'app-asmt-four',
  templateUrl: './asmt-four.component.html',
  styleUrls: ['./asmt-four.component.css']
})
export class AsmtFourComponent implements OnInit {

  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  constructor(private activeAndInactive: ActiveAndInactive) { }

  ngOnInit(): void {
    this.activeUsers = this.activeAndInactive.activeUsers;
    this.inactiveUsers = this.activeAndInactive.inactiveUsers;

    this.activeAndInactive.setToActive.subscribe((name: string) => this.activeAndInactive.setActive(name));
    this.activeAndInactive.setToInactive.subscribe((name: string) => this.activeAndInactive.setInactive(name));
  } 
}
