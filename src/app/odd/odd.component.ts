import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, OnChanges {
  @Input() oddNumber: number;
  oddNumbers: number[] = [];
  constructor() { }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.oddNumber % 2 != 0)
      this.oddNumbers.push(this.oddNumber)
  }
}
