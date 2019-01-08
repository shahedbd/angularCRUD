import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import Posts from '../Posts';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})


export class PostsComponent implements OnInit {

  posts: Posts[];

  constructor(private pc: PostsService) { }

  ngOnInit() {
    this.pc
      .getPostsInfo()
      .subscribe((data: Posts[]) => {
        this.posts = data;
        console.log(data);
    });
  }

}
