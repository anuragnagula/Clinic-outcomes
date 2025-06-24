export interface TimeRangeData {
  label: string;
  percentage: number;
}

export interface GmiData {
  range: string;
  percentage: number;
}

export interface ClinicOutcomeState {
  timeInRange: TimeRangeData[];
  gmi: GmiData[];
  activePatientsCount: number;
  reportDateRange: { start: Date; end: Date };
  lastUpdated: Date;
  loading: boolean;
  error: string | null;
}