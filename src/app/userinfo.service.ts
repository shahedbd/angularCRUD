import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserinfoService {
  uri = 'https://sheetsu.com/apis/v1.0dc/020b2c0f';
  uri2 = 'https://sheetsu.com/apis/v1.0dc/020b2c0f/search?id=5';

  constructor(private http: HttpClient) { }

  getUserInfo() {
    return this.http.get(`${this.uri2}`);
  }
}

