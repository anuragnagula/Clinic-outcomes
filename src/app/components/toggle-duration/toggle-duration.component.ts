import { Component, Output, EventEmitter } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle-duration',
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule],
  template: `
    <mat-button-toggle-group
      [value]="selected"
      (change)="onSelectionChange($event)"
      appearance="legacy"
      class="toggle-group"
      exclusive
    >
      <mat-button-toggle [value]="30">30 Days</mat-button-toggle>
      <mat-button-toggle [value]="60">60 Days</mat-button-toggle>
      <mat-button-toggle [value]="90">90 Days</mat-button-toggle>
    </mat-button-toggle-group>
  `,
  styles: [`
    .toggle-group {
      margin-bottom: 1rem;
    }
      mat-button-toggle {
  font-weight: 500;
  color: #000;
  min-width: 100px;
}
  `]
})
export class ToggleDurationComponent {
  @Output() durationSelected = new EventEmitter<number>();
  selected = 30;

  onSelectionChange(event: any) {
    this.selected = event.value;
    this.durationSelected.emit(this.selected);
  }
}
