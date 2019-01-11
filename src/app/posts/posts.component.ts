import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import Posts from '../Posts';
import { delay } from 'q';
import { Observable } from 'rxjs';


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

  deletePosts(id) {
    this.route.params.subscribe(async params => {
      this.ps.deletePosts(id);
      window.location.reload();
      // await delay(1000);
    });
    // this.router.navigate(['posts']);
  }
}
