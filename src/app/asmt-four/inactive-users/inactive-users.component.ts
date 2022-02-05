import { Component, Input, OnInit } from '@angular/core';
import { ActiveAndInactive } from 'src/app/shared/asmt.act-inact.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() inactiveUser: string;
  
  constructor(private activeAndInactive: ActiveAndInactive) { }

  ngOnInit(): void {
    
  }
  setAsActive() {
    this.activeAndInactive.setToActive.emit(this.inactiveUser);
  }
}
