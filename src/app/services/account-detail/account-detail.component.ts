import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { AccountService } from 'src/app/shared/account.service';
import { LoggingService } from 'src/app/shared/logging.service';
@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css'],
  // providers: [LoggingService]
})
export class AccountDetailComponent implements OnInit {

  @Input() account:{name:string,status:string};
  @Input() id: number;
  constructor(private loggingService:LoggingService,private accountService: AccountService) { }

  ngOnInit(): void {
  }

  onStatusChange(status: string): void {
    this.accountService.updateDetails(this.id,status);
    this.accountService.statusChangeEvent.emit(status); // trying event emitter from services and collecting it in services component
    // this.loggingService.logStatusChange({name:this.account.name,status:status});
  }

}
