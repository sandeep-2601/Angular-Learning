import { Component, OnInit } from '@angular/core';
import { Subscription,interval} from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  counterSubscription: Subscription;
  constructor() { }

  ngOnInit(): void {
    // this.counterSubscription = interval(1000).subscribe(counter => {
    //   console.log(counter);
    // }); // interval itself is an observable offere by rxjs
    const customObservable = Observable.create()(observer =>{
      let counter = 0;
      setInterval((counter=>{
        observer.next(counter);
        counter++;
      }),1000);
    });

    customObservable.subscribe(counter=>{console.log(counter);});
  }
  ngOnDestroy(): void {
      // this.counterSubscription.unsubscribe();
  }

}
