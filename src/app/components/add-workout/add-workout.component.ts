import { Component } from '@angular/core';
import { WorkoutService, WorkoutEntry } from '../../services/workout.service';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent {
  name: string = '';
  type: string = '';
  minutes: number | null = null;

  constructor(private workoutService: WorkoutService) {}

  updateName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  updateType(event: Event) {
    this.type = (event.target as HTMLSelectElement).value;
  }

  updateMinutes(event: Event) {
    this.minutes = +(event.target as HTMLInputElement).value;
  }

  addWorkout() {
    if (this.name && this.type && this.minutes !== null) {
      const newWorkout = {
        userName: this.name,  // ✅ Corrected property name
        workoutType: this.type,  // ✅ Corrected property name
        workoutMinutes: this.minutes  // ✅ Corrected property name
      };

      this.workoutService.addWorkoutEntry(newWorkout); // ✅ Use the correct method

      // Reset input fields
      this.name = '';
      this.type = '';
      this.minutes = null;
    }
  }
}
