import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asmt-two',
  templateUrl: './asmt-two.component.html',
  styleUrls: ['./asmt-two.component.css']
})
export class AsmtTwoComponent {
  username: string = "";
  isDisabled: boolean = true;
  
  resetUsername(): void {
    this.username = "";
  }
}
