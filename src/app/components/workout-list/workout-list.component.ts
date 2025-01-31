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

  // 🔵 Pagination Variables
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 1;
  paginatedWorkouts: WorkoutEntry[] = [];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    this.loadWorkouts();
  }

  onSearchChange(event: Event) {
    this.search = (event.target as HTMLInputElement).value;
    this.currentPage = 1; // Reset to first page on search
    this.loadWorkouts();
  }

  onFilterChange(event: Event) {
    this.filterType = (event.target as HTMLSelectElement).value;
    this.currentPage = 1; // Reset to first page on filter change
    this.loadWorkouts();
  }

  loadWorkouts() {
    let filteredWorkouts = this.workoutService.getWorkoutEntries();

    if (this.search) {
      filteredWorkouts = filteredWorkouts.filter(workout =>
        workout.userName.toLowerCase().includes(this.search.toLowerCase())
      );
    }

    if (this.filterType) {
      filteredWorkouts = filteredWorkouts.filter(workout =>
        workout.workoutType.toLowerCase() === this.filterType.toLowerCase()
      );
    }

    // ✅ Get unique user names for dropdown selection
    this.uniqueUsers = [...new Set(filteredWorkouts.map(workout => workout.userName))];

    // ✅ Update pagination
    this.workouts = filteredWorkouts;
    this.totalPages = Math.ceil(this.workouts.length / this.itemsPerPage);
    this.updatePaginatedWorkouts();
  }

  // 🔵 Pagination Methods
  updatePaginatedWorkouts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedWorkouts = this.workouts.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedWorkouts();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedWorkouts();
    }
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
