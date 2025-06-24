import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TimeRangeData, GmiData } from '../models/clinic-outcome.model';

@Injectable({ providedIn: 'root' })
export class ClinicOutcomeService {
  fetchAll(duration: number): Observable<{
    timeInRange: TimeRangeData[];
    gmi: GmiData[];
    activePatientsCount: number;
    reportDateRange: { start: Date; end: Date };
  }> {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - duration);

    const timeInRange: TimeRangeData[] = [
      { label: '0-70 mg/dL', percentage: 5 },
      { label: '70-180 mg/dL', percentage: duration === 30 ? 80 : duration === 60 ? 60 : 50 },
      { label: '180-250 mg/dL', percentage: duration === 30 ? 10 : duration === 60 ? 30 : 40 },
      { label: '>250 mg/dL', percentage: 5 }
    ];

  const gmi: GmiData[] = [
  { range: '6.0-6.4%', percentage: duration === 30 ? 15 : duration === 60 ? 30 : 35 },
  { range: '6.5-6.9%', percentage: duration === 30 ? 40 : duration === 60 ? 35 : 30 },
  { range: '7.0-7.4%', percentage: duration === 30 ? 20 : duration === 60 ? 20 : 20 },
  { range: '>7.5%', percentage: duration === 30 ? 25 : duration === 60 ? 15 : 15 }
];

    const activePatientsCount = 128 + duration;

    return of({
      timeInRange,
      gmi,
      activePatientsCount,
      reportDateRange: { start, end }
    });
  }
}
