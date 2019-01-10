import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { delay } from 'q';

@Component({
  selector: 'app-createposts',
  templateUrl: './createposts.component.html',
  styleUrls: ['./createposts.component.css']
})
export class CreatepostsComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: PostsService,
    private router: Router,
    private route: ActivatedRoute) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }
  async addPosts(title, author) {
    this.ps.addPosts(title, author);
    await delay(1000);
    this.router.navigate(['posts']);
  }
  ngOnInit() {
  }
}
