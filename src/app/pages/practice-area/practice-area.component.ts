import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'plc-practice-area',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './practice-area.component.html',
  styleUrl: './practice-area.component.scss',
})
export class PracticeAreaComponent {}
