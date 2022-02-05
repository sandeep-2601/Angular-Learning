import { Component, Input, OnInit } from '@angular/core';
import { RServerService } from '../rserver.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: {id:number,name: string}[];

  constructor(private rServerService: RServerService) { }

  ngOnInit(): void {
    this.users = this.rServerService.users;
  }

}
