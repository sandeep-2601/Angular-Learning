import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  displayNumber: number = 0;
  @Output() display = new EventEmitter<number>();
  intervalID;
  constructor() { }

  ngOnInit(): void {
  }
  startNumber(): void {
   this.intervalID =  setInterval(()=>{
      this.displayNumber++;
      this.display.emit(this.displayNumber);
    },1000);
  }
  stopNumber(): void {
    clearInterval(this.intervalID);
    this.display.emit(this.displayNumber);
  }
}
