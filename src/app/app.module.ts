import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // ✅ Required for ngModel
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AddWorkoutComponent } from './components/add-workout/add-workout.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';

@NgModule({
  declarations: [
    WorkoutListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule  // ✅ Import CommonModule for *ngFor
  ],
  bootstrap: [WorkoutListComponent]
})
export class AppModule { }
