import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttorneyDto, Attorneys } from '../../Data/Dto/attorneys';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'plc-attorneys',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './attorneys.component.html',
  styleUrl: './attorneys.component.scss',
})
export class AttorneysComponent {
  public attorneyList = signal<AttorneyDto[]>(Attorneys);
}
