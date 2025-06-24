import { createReducer, on } from '@ngrx/store';
import * as ClinicOutcomeActions from './clinic-outcome.actions';
import { ClinicOutcomeState } from '../models/clinic-outcome.model';

export const initialState: ClinicOutcomeState = {
  timeInRange: [],
  gmi: [],
  activePatientsCount: 0,
  reportDateRange: { start: new Date(), end: new Date() },
  lastUpdated: new Date(),
  loading: false,
  error: null
};

export const clinicOutcomeReducer = createReducer(
  initialState,
  on(ClinicOutcomeActions.loadClinicOutcome, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ClinicOutcomeActions.loadClinicOutcomeSuccess, (state, payload) => ({
    ...state,
    ...payload,
    loading: false
  })),
  on(ClinicOutcomeActions.loadClinicOutcomeFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);