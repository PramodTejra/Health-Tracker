import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnChanges } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-workout-chart',
  standalone: true,
  templateUrl: './workout-chart.component.html',
  styleUrls: ['./workout-chart.component.css']
})
export class WorkoutChartComponent implements AfterViewInit, OnChanges {
  @Input() userWorkouts: { workoutType: string; workoutMinutes: number }[] = [];
  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef;
  chart: any;

  ngAfterViewInit() {
    this.renderChart();
  }

  ngOnChanges() {
    // Ensure chartCanvas is available before rendering the chart
    if (this.chartCanvas) {
      this.renderChart();
    }
  }

  renderChart() {
    if (!this.chartCanvas || !this.chartCanvas.nativeElement) {
      return; // ✅ Avoid error if canvas is not yet available
    }

    if (this.chart) {
      this.chart.destroy();
    }

    if (!this.userWorkouts.length) {
      return;
    }

    const workoutTypes = this.userWorkouts.map(w => w.workoutType);
    const workoutMinutes = this.userWorkouts.map(w => w.workoutMinutes);

    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: workoutTypes,
        datasets: [{
          label: 'Workout Minutes',
          data: workoutMinutes,
          backgroundColor: ['#3b82f6', '#10b981', '#facc15', '#ef4444'],
          borderWidth: 1,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
