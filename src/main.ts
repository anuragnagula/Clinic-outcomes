import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';

import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PieController,
  ArcElement
} from 'chart.js';
import { clinicOutcomeReducer } from './app/store/clinic-outcome.reducer';
import { ClinicOutcomeEffects } from './app/store/clinic-outcome.effects';
import { ClinicOutcomeComponent } from './app/components/clinic-outcome/clinic-outcome.component';
import { provideAnimations } from '@angular/platform-browser/animations';


Chart.register(BarController, BarElement, CategoryScale, LinearScale,PieController, ArcElement,Tooltip, Legend);
bootstrapApplication(AppComponent, {
  providers: [
    provideStore(),
    provideState({ name: 'clinicOutcome', reducer: clinicOutcomeReducer }),
    provideEffects(),
    provideEffects([ClinicOutcomeEffects]),
    provideRouter([{ path: '', component: ClinicOutcomeComponent }]),
    provideAnimations()
  ]
});

