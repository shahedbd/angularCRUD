import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  url = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) { }

  getPostsInfo() {
    return this.http.get(`${this.url}`);
  }

  updatePostsGet(id) {
    return this
      .http
      .get(`${this.url}/${id}`);
  }

  updatePosts(title, author, id) {
    const obj = {
      title: title,
      author: author
    };
    this
      .http
      .put(`${this.url}/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
}
