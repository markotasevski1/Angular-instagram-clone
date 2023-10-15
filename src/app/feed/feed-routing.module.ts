import { FeedLayoutComponent } from './components/feed-layout/feed-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

const routes: Routes = [
  { path: '', component: FeedLayoutComponent }, // Modify pathMatch
  { path: ':id', component: PostDetailsComponent },
  {
    path: ':id/edit',
    component: EditPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedRoutingModule {}
