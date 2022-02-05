import { Component, Input, OnInit } from '@angular/core';
import { ActiveAndInactive } from 'src/app/shared/asmt.act-inact.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() activeUser: string;

  constructor(private activeAndInactive: ActiveAndInactive) { }

  ngOnInit(): void {
    
  }
  setAsInactive() {
    this.activeAndInactive.setToInactive.emit(this.activeUser);
  }
}
