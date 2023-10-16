import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedLayoutComponent } from './components/feed-layout/feed-layout.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { FeedRoutingModule } from './feed-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AddPostComponent } from './components/add-post/add-post.component';

@NgModule({
  declarations: [
    FeedLayoutComponent,
    PostDetailsComponent,
    EditPostComponent,
    AddPostComponent,
  ],
  imports: [CommonModule, FeedRoutingModule, SharedModule, HttpClientModule],
})
export class FeedModule {}
