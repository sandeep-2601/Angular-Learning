import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RServerService } from '../../rserver.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number,name: string};
  constructor(private route: ActivatedRoute,private rServerService: RServerService) { }

  ngOnInit(): void {
     this.user = this.rServerService.users[+this.route.snapshot.params['id']];
     this.route.params.subscribe((params:Params)=>{
       this.user = this.rServerService.users[+params['id']];
     })
  } 

}
