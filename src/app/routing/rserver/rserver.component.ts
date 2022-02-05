import { Component, Input, OnInit } from '@angular/core';
import { RServerService } from '../rserver.service';

@Component({
  selector: 'app-rserver',
  templateUrl: './rserver.component.html',
  styleUrls: ['./rserver.component.css']
})
export class RserverComponent implements OnInit {

  servers: { name: string, status: string }[] = [];
  constructor(private rServerService: RServerService) { }

  ngOnInit(): void {
    this.servers = this.rServerService.servers;
  }

}
