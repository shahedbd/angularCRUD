import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-deleteposts',
  templateUrl: './deleteposts.component.html',
  styleUrls: ['./deleteposts.component.css']
})
export class DeletepostsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ps: PostsService, ) { }

  ngOnInit() {
  }

  deletePosts(title, author) {
    this.route.params.subscribe(params => {
      this.ps.deletePosts(params['id']);
      this.router.navigate(['posts']);
    });
  }
}
