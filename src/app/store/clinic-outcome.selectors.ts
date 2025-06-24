import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClinicOutcomeState } from '../models/clinic-outcome.model';

export const selectClinicOutcome = createFeatureSelector<ClinicOutcomeState>('clinicOutcome');

export const selectTimeInRange = createSelector(
  selectClinicOutcome,
  state => state.timeInRange
);

export const selectGmi = createSelector(
  selectClinicOutcome,
  state => state.gmi
);

export const selectActivePatientsCount = createSelector(
  selectClinicOutcome,
  state => state.activePatientsCount
);

export const selectDateRange = createSelector(
  selectClinicOutcome,
  state => state.reportDateRange
);

export const selectLastUpdated = createSelector(
  selectClinicOutcome,
  state => state.lastUpdated
);

export const selectLoading = createSelector(
  selectClinicOutcome,
  state => state.loading
);