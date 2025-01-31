import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWorkoutComponent } from './components/add-workout/add-workout.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';

const routes: Routes = [
  { path: '', component: WorkoutListComponent }, // Default Route
  { path: 'add-workout', component: AddWorkoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // ✅ Register Routes
  exports: [RouterModule] // ✅ Export RouterModule for usage
})
export class AppRoutingModule { }
