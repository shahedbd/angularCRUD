import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import Posts from '../Posts';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})


export class PostsComponent implements OnInit {

  posts: Posts[];

  constructor(private ps: PostsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.ps
      .getPostsInfo()
      .subscribe((data: Posts[]) => {
        this.posts = data;
        console.log(data);
    });
  }

  deletePosts(title, author) {
    this.route.params.subscribe(params => {
      this.ps.deletePosts(params['id']);
      this.router.navigate(['posts']);
    });
  }
}