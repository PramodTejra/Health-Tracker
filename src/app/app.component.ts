import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddWorkoutComponent } from './components/add-workout/add-workout.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,  // ✅ Required for *ngIf, *ngFor, etc.
    RouterModule,  // ✅ Required for <router-outlet>
    AddWorkoutComponent,
    WorkoutListComponent
  ]
})
export class AppComponent {
  title = 'Health Challenge Tracker';
}