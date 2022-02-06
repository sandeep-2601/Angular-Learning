import { Post } from "./posts.model";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PostHttpService {

    constructor(private http: HttpClient) { }

    fetchData() {
        return this.http.get<{ [key: string]: Post }>
            ('https://recipie-app-d9bea-default-rtdb.firebaseio.com/posts.json',
            {
                headers:new HttpHeaders({'custom-header':'something'}),
                params: new HttpParams().set('search','jose')
            })
            .pipe(map((responseData) => {
                const postsArray: Post[] = [];
                for (let key in responseData) {
                    postsArray.push({ id: key, ...responseData[key] });
                }
                return postsArray;
            }));
    }

    sendData() {
        const postDetails = { title: "Not So trending Tech", content: "Lorem Ipsum" }
        return this.http.
            post<{ name: string }>('https://recipie-app-d9bea-default-rtdb.firebaseio.com/posts.json', postDetails);
    }

    clearPost() {
        return this.http.
            delete(`https://recipie-app-d9bea-default-rtdb.firebaseio.com/posts.json/`);
    }
}