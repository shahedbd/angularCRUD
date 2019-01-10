import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-createposts',
  templateUrl: './createposts.component.html',
  styleUrls: ['./createposts.component.css']
})
export class CreatepostsComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: PostsService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }
  addPosts(title, author) {
    this.ps.addPosts(title, author);
  }

  ngOnInit() {
  }
}
