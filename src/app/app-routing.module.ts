import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { GstGetComponent } from './gst-get/gst-get.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { PostsComponent } from './posts/posts.component';
import { CreatepostsComponent } from './createposts/createposts.component';
import { EditpostsComponent } from './editposts/editposts.component';


const routes: Routes = [
  {
    path: 'business/create',
    component: GstAddComponent
  },
  {
    path: 'business/edit/:id',
    component: GstEditComponent
  },
  {
    path: 'business',
    component: GstGetComponent
  },
  {
    path: 'userinfo',
    component: UserinfoComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/createPosts',
    component: CreatepostsComponent
  },
  {
    path: 'posts/edit/:id',
    component: EditpostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
