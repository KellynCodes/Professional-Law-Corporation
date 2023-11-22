import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Typed from 'typed.js';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'plc-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router) {}
  ngAfterViewInit() {
    this.initTyped();
  }

  navigate(link: string, fragment: string): void {
    this.router.navigate([link], { fragment: fragment });
  }

  private initTyped() {
    const options = {
      strings: [
        'A Professional Law Corporation',
        'Your Trusted Advocates in Calabasas, CA',
        'Navigating Legal Challenges with Excellence and Integrity',
      ],
      typeSpeed: 50,
      backSpeed: 15,
      showCursor: true,
      cursorChar: '|',
      loop: true,
    };

    new Typed('.typed-element', options);
  }
}
