import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroSectionComponent } from './public/hero-section/hero-section.component';
import { ErrorRouteComponent } from './public/error-route/error-route.component';

const routes: Routes = [
  { path: '', component: HeroSectionComponent },

  {
    path: 'feed',
    loadChildren: () =>
      import('../app/feed/feed.module').then((m) => m.FeedModule),
  },
  { path: 'route-not-found', component: ErrorRouteComponent },
  { path: '**', redirectTo: 'route-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
