import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../components/cta/cta.component';
import Typed from 'typed.js';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'plc-home',
  standalone: true,
  imports: [CommonModule, CtaComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  ngAfterViewInit() {
    this.initTyped();
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

    const typed = new Typed('.typed-element', options);
  }
}
