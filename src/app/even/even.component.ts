import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit, OnChanges {
  @Input() evenNumber: number;
  evenNumbers: number[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.evenNumber % 2 == 0) {
      this.evenNumbers.push(this.evenNumber)
    }
  }
}
