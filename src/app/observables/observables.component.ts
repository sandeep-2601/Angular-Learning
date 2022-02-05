import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, Subscription } from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy {

  firstObsSubs: Subscription;
  timerStart: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // interval the observable given by the rjxs

    // this.firstObsSubs = interval(2000).subscribe((count) => {
    //   console.log(count);
    // });

    // Let us build the clone of it
    // Create an observable and emit a new event every second using next
    const setIntervalObservable = Observable.create(observer => {
      this.timerStart = true;
      let count = 0;
      setInterval(() => {
        count++;
        observer.next(count);
        if(count === 3) {
          observer.complete();
          this.timerStart = false;
        }
        if(count>3) observer.error(new Error('number greater than 3'))
        
      }, 1000);
    });

    this.firstObsSubs = setIntervalObservable.pipe(map((data: number)=>{
      return `Round ${data}`;
    })).subscribe(data=>{
      console.log(data);
      if(data==10) this.ngOnDestroy();
    },error=>{
      alert(error.message);
    },()=>{console.log('completed');});

  }

  ngOnDestroy() {
    this.firstObsSubs.unsubscribe();
  }
}
