import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-items',
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.scss'],
})
export class NavItemsComponent {
  @Input() isMenuOpen: Boolean | undefined;
}
