import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  // providers: [AccountService]
})
export class ServicesComponent implements OnInit {
  accountServers: {name:string,status: string}[] = [];
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountServers = this.accountService.accountServers;
    this.accountService.statusChangeEvent.subscribe(
      (status: string) =>{
        alert(`Server Status changed to ${status}`)
      }
    )
  }
 
}
