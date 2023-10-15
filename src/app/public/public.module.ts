import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SharedModule } from '../shared/shared.module';
import { NavItemsComponent } from './nav-menu/nav-items/nav-items.component';
import { ErrorRouteComponent } from './error-route/error-route.component';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [
    NavMenuComponent,
    HeroSectionComponent,
    NavItemsComponent,
    ErrorRouteComponent,
  ],
  imports: [CommonModule, SharedModule, PublicRoutingModule],
  exports: [NavMenuComponent, HeroSectionComponent, ErrorRouteComponent],
})
export class PublicModule {}
