import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutService, WorkoutEntry } from '../../services/workout.service';
import { WorkoutChartComponent } from '../workout-chart/workout-chart.component';

@Component({
  selector: 'app-workout-list',
  standalone: true,
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css'],
  imports: [CommonModule, WorkoutChartComponent] // ✅ Import Chart Component
})
export class WorkoutListComponent implements OnInit {
  workouts: WorkoutEntry[] = [];
  search: string = '';
  filterType: string = '';
  selectedUser: string | null = null;
  userWorkouts: WorkoutEntry[] = [];
  uniqueUsers: string[] = [];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    this.loadWorkouts();
  }

  onSearchChange(event: Event) {
    this.search = (event.target as HTMLInputElement).value;
    this.loadWorkouts();
  }

  onFilterChange(event: Event) {
    this.filterType = (event.target as HTMLSelectElement).value;
    this.loadWorkouts();
  }

  loadWorkouts() {
    this.workouts = this.workoutService.getWorkoutEntries();

    if (this.search) {
      this.workouts = this.workouts.filter(workout =>
        workout.userName.toLowerCase().includes(this.search.toLowerCase())
      );
    }

    if (this.filterType) {
      this.workouts = this.workouts.filter(workout =>
        workout.workoutType.toLowerCase() === this.filterType.toLowerCase()
      );
    }

    // ✅ Get unique user names for dropdown selection
    this.uniqueUsers = [...new Set(this.workouts.map(workout => workout.userName))];
  }

  selectUser(event: Event) {
    const userName = (event.target as HTMLSelectElement).value;
    this.selectedUser = userName;
    this.userWorkouts = this.workouts.filter(workout => workout.userName === userName);
  }

  clearSelection() {
    this.selectedUser = null;
    this.userWorkouts = [];
  }
}
