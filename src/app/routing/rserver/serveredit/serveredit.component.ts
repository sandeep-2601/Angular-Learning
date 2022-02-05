import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../../can-deactivate.service';
import { RServerService } from '../../rserver.service';

@Component({
  selector: 'app-serveredit',
  templateUrl: './serveredit.component.html',
  styleUrls: ['./serveredit.component.css']
})
export class ServereditComponent implements OnInit, CanComponentDeactivate {
  server: { id: number, name: string, status: string };
  saveChanges: boolean = false;
  serverName: string;
  serverStatus: string;
  constructor(private rServerService: RServerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.server = this.rServerService.servers[this.route.snapshot.params['id'] - 1];
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    console.log("two way binding")
  }
  updateServer(): void {
    this.saveChanges = true;
    this.rServerService.servers[this.server.id - 1].name = this.serverName;
    this.rServerService.servers[this.server.id - 1].status = this.serverStatus;
    this.router.navigate(['../'],{relativeTo:this.route})
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.saveChanges) {
      return confirm("Do you want to discard changes");
    }
    else return true;
  }
}