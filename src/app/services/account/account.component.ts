import { Component, ElementRef, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { AccountService } from 'src/app/shared/account.service';
import { LoggingService } from 'src/app/shared/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent implements OnInit {
  @ViewChild('accountName') accountName: ElementRef;
  @ViewChild('accountStatus') accountStatus: ElementRef;
  constructor(private loggingService: LoggingService,private accountService: AccountService) { }

  ngOnInit(): void {
  } 
  
 setaccountDetails(): void {
    const accName = this.accountName.nativeElement.value;
    const accStatus = this.accountStatus.nativeElement.value;
    this.accountService.accountDetails(accName,accStatus);
    // this.loggingService.logAccountCreated({name:accName,status:accStatus});
 }

}
