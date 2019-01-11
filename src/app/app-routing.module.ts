import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { CreatepostsComponent } from './createposts/createposts.component';
import { EditpostsComponent } from './editposts/editposts.component';

const routes: Routes = [
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
