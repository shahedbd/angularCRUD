import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { delay } from 'q';


@Component({
  selector: 'app-editposts',
  templateUrl: './editposts.component.html',
  styleUrls: ['./editposts.component.css']
})
export class EditpostsComponent implements OnInit {

  angForm: FormGroup;
  posts: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ps: PostsService,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.updatePostsGet(params['id']).subscribe(res => {
        this.posts = res;
      });
    });
  }

  updatePosts(title, author) {
    this.route.params.subscribe(async params => {
      this.ps.updatePosts(title, author, params['id']);
      await delay(1000);
      this.router.navigate(['posts']);
    });
  }

}
