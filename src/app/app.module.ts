import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';
import { EditpostsComponent } from './editposts/editposts.component';
import { CreatepostsComponent } from './createposts/createposts.component';
import { DeletepostsComponent } from './deleteposts/deleteposts.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    EditpostsComponent,
    CreatepostsComponent,
    DeletepostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
