import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PracticeAreaDto, PracticeAreas } from '../../Data/Dto/practice.area';

@Component({
  selector: 'plc-practice-area',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './practice-area.component.html',
  styleUrl: './practice-area.component.scss',
})
export class PracticeAreaComponent {
  public practiceAreaList = signal<PracticeAreaDto[]>(PracticeAreas);
}
