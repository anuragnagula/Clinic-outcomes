import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ClinicOutcomeService } from '../services/clinic-outcome.service';
import * as ClinicOutcomeActions from './clinic-outcome.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ClinicOutcomeEffects {
  loadOutcome$;

  constructor(private actions$: Actions, private service: ClinicOutcomeService) {
    console.log('Effects constructor - actions$', this.actions$);

    this.loadOutcome$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(ClinicOutcomeActions.loadClinicOutcome),
        mergeMap(action =>
          this.service.fetchAll(action.duration).pipe(
            map(data =>
              ClinicOutcomeActions.loadClinicOutcomeSuccess({
                ...data,
                lastUpdated: new Date()
              })
            ),
            catchError(err =>
              of(ClinicOutcomeActions.loadClinicOutcomeFailure({ error: err.message }))
            )
          )
        )
      );
    });
  }
}