import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input() server: { name: string, content: string, duplicate: boolean };

  constructor() {
    console.log("constructor is called");
  }

  ngOnInit(): void {
      console.log("ngOnInit method is called");

  }

  ngOnChanges(changes: SimpleChange): void {
    console.log("ngOnChanges methods is called");
    console.log(changes);
  }


}
