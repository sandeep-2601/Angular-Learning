import { Post } from "./posts.model";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PostHttpService {

    constructor(private http: HttpClient) { }

    fetchData() {
        return this.http.get<{ [key: string]: Post }>('https://recipie-app-d9bea-default-rtdb.firebaseio.com/posts.json')
            .pipe(map((responseData) => {
                const postsArray: Post[] = [];
                for (let key in responseData) {
                    postsArray.push({ id: key, ...responseData[key] });
                }
                return postsArray;
            }));

    }

    sendData(): void {
        const postDetails = { title: "Trending Tech", content: "Lorem Ipsum" }
        this.http.
            post<{ name: string }>('https://recipie-app-d9bea-default-rtdb.firebaseio.com/posts.json', postDetails).
            subscribe((respData) => {
                console.log(respData);
            });
    }

}