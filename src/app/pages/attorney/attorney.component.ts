import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttorneyDto, Attorneys } from '../../Data/Dto/attorneys';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-attorney',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './attorney.component.html',
  styleUrl: './attorney.component.scss',
})
export class AttorneyComponent {
  public attorneyList = signal<AttorneyDto[]>(Attorneys);
  public attorneyId!: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.attorneyId = this.activatedRoute.snapshot.params['id'];
    this.attorneyList.update((x) =>
      x.filter((x) => x.id == parseInt(this.attorneyId))
    );
  }
}
