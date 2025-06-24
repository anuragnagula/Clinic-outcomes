import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { TimeRangeData } from '../../../models/clinic-outcome.model';

@Component({
  selector: 'app-time-in-range',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './time-in-range.component.html',
  styleUrl: './time-in-range.component.css'
})
export class TimeInRangeComponent {
  @Input() data: TimeRangeData[] = [];

  get barChartData(): ChartConfiguration<'bar'>['data'] {
    return {
      labels: [''],
      datasets: this.data.map((segment, i) => ({
        data: [segment.percentage],
        label: segment.label,
        backgroundColor: this.colors[i % this.colors.length]
      }))
    };
  }

  colors: string[] = ['#4caf50', '#ff9800', '#f44336', '#2196f3', '#9c27b0'];

  barChartType: 'bar' = 'bar';
  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        padding: 0
      },
    scales: {
      x: {
        stacked: true,
        grid: { display: false }
      },
      y: {
        stacked: true,
        min: 0,
        max: 100,
        ticks: {
          callback: (tickValue: string | number) => {
            const val = typeof tickValue === 'number' ? tickValue : parseFloat(tickValue);
            return `${val}%`;
          }
        }

      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 15,
          padding: 0
        }
      }
      ,
      title: { display: true, text: 'Time in Range Distribution' },
      tooltip: {
        callbacks: {
          label: ctx => `${ctx.dataset.label}: ${ctx.raw}%`
        }
      }
    }
  };
}
