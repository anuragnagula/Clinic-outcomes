import { createAction, props } from '@ngrx/store';
import { TimeRangeData, GmiData } from '../models/clinic-outcome.model';

export const loadClinicOutcome = createAction(
  '[Clinic Outcomes] Load Clinic Outcomes',
  props<{ duration: number }>()
);

export const loadClinicOutcomeSuccess = createAction(
  '[Clinic Outcomes] Load Clinic Outcomes Success',
  props<{
    timeInRange: TimeRangeData[];
    gmi: GmiData[];
    activePatientsCount: number;
    reportDateRange: { start: Date; end: Date };
    lastUpdated: Date;
  }>()
);

export const loadClinicOutcomeFailure = createAction(
  '[Clinic Outcomes] Load Clinic Outcomes Failure',
  props<{ error: string }>()
);