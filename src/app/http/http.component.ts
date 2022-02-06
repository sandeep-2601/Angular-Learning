import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PostHttpService } from './posthttp.service';
import { Post } from './posts.model';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  clicked: boolean = false;
  posts: Post[] = [];
  error: string = null;
  isFetching: boolean = false;

  constructor(private httpService: PostHttpService) { }

  ngOnInit(): void {
    this.onFetchData();
  }

  dismissed(): void {
    this.clicked=!this.clicked;
  }

  onFetchData(): void {
    this.isFetching = true;
    this.httpService.fetchData().subscribe((posts) => {
      this.posts = posts;
      this.isFetching = false;
    },(error)=>{
      this.error = error.message;
      this.isFetching = false;
    });

  }

  onSendData(): void {
    this.httpService.sendData().
    subscribe(()=>this.onFetchData());
  }

  onClearPosts(): void {
    this.httpService.clearPost().subscribe(()=>{this.posts=[]});
  }

}
