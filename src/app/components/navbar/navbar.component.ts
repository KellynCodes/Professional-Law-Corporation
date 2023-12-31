import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'plc-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isNavbarOpen!: boolean;

  toggleNavbar() {
    if (window.innerWidth < 992) {
      this.isNavbarOpen = !this.isNavbarOpen;
    }
  }
}
