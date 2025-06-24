import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ClinicOutcomeActions from '../../store/clinic-outcome.actions';
import {
  selectTimeInRange,
  selectGmi,
  selectActivePatientsCount,
  selectDateRange,
  selectLastUpdated
} from '../../store/clinic-outcome.selectors';

import { CommonModule } from '@angular/common';
import { TimeInRangeComponent } from './time-in-range/time-in-range.component';
import { GmiComponent } from './gmi/gmi.component';
import { ToggleDurationComponent } from '../toggle-duration/toggle-duration.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-clinic-outcome',
  standalone: true,
  // changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TimeInRangeComponent, GmiComponent, ToggleDurationComponent, MatCardModule, MatTooltipModule, MatIconModule],
  templateUrl: './clinic-outcome.component.html',
  styleUrl: './clinic-outcome.component.css'
})
export class ClinicOutcomeComponent implements OnInit {
  timeInRange$!: Observable<any>;
  gmi$!: Observable<any>;
  patients$!: Observable<any>;
  range$!: Observable<any>;
  updated$!: Observable<any>;

  duration:number = 30;

  constructor(private store: Store) {}

  ngOnInit(): void {
    console.log('************** Dispatching ****************');
    this.timeInRange$ = this.store.select(selectTimeInRange);
    this.gmi$ = this.store.select(selectGmi);
    this.patients$ = this.store.select(selectActivePatientsCount);
    this.range$ = this.store.select(selectDateRange);
    this.updated$ = this.store.select(selectLastUpdated);
    console.log('check in oninit', this.timeInRange$, this.gmi$, this.patients$)
    
    this.loadData(this.duration);
  }

   onDurationChange(days: number) {
    this.duration = days;
    this.loadData(this.duration);
  }

  loadData(duration: number) {
    this.store.dispatch(ClinicOutcomeActions.loadClinicOutcome({ duration }));
  }

  print() : void {
    // print logic goes here
  }
}