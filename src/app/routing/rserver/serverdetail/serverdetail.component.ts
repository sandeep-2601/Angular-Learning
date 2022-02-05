import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { RServerService } from '../../rserver.service';

@Component({
  selector: 'app-serverdetail',
  templateUrl: './serverdetail.component.html',
  styleUrls: ['./serverdetail.component.css']
})
export class ServerdetailComponent implements OnInit {
  server: { id: number,name: string, status: string };
  constructor(private route:ActivatedRoute,private rserverService:RServerService,private router:Router) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data)=>{this.server = data['server'];}) // name in the data['name'] should match the key of resolver
    // this.server = this.rserverService.servers[+this.route.snapshot.params['id']-1];
    // this.route.params.subscribe((params: Params)  => {
    //   this.server = this.rserverService.servers[+params['id'] - 1]; 
    // })
  }

  editServer(): void {
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
}
