import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { GmiData } from '../../../models/clinic-outcome.model';

@Component({
  selector: 'app-gmi',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './gmi.component.html',
  styleUrl: './gmi.component.css'
})
export class GmiComponent {
  @Input() data: GmiData[] = [];

  get pieChartData(): ChartConfiguration<'pie'>['data'] {
    return {
      labels: this.data.map(d => d.range),
      datasets: [
        {
          data: this.data.map(d => d.percentage),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#81C784']
        }
      ]
    };
  }

  pieChartType: 'pie' = 'pie';
 pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 20,
          padding: 20
        }
      },
      title: {
        display: true,
        text: 'Pie Chart'
      }
    }
  };
}