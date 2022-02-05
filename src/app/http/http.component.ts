import { Component, OnInit } from '@angular/core';
import { PostHttpService } from './posthttp.service';
import { Post } from './posts.model';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  posts: Post[] = [];
  isFetching: boolean = false;

  constructor(private postHttp: PostHttpService) { }

  ngOnInit(): void {
    this.onFetchData();
  }

  onFetchData(): void {
    this.isFetching = true;
    this.postHttp.fetchData().subscribe((posts) => {
      this.posts = posts;
    })
    this.isFetching = false;
  }

  onSendData(): void {
    this.postHttp.sendData();
  }

}
