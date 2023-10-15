import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  isMenuOpen: boolean = true;

  private readonly screenSizeThreshold = 900;
  mcaLogoUrl: string = '../../../assets/images/mca-logo.png';
  hamburgerMenuUrl: string = '../../../assets/images/hamburger-menu-icon.png';
  hamburgerXMenuUrl: string = '../../../assets/images/hamburger-menu-x.png';
  hamburgerUrl: string = this.hamburgerMenuUrl;

  ngOnInit() {
    this.updateMenuState(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateMenuState((event.target as Window).innerWidth);
  }

  private updateMenuState(screenWidth: number) {
    this.isMenuOpen = screenWidth > this.screenSizeThreshold;
    this.hamburgerUrl = this.isMenuOpen
      ? this.hamburgerXMenuUrl
      : this.hamburgerMenuUrl;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.hamburgerUrl = this.isMenuOpen
      ? this.hamburgerXMenuUrl
      : this.hamburgerMenuUrl;
    console.log(this.isMenuOpen);
  }
}
