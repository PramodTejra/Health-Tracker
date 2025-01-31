import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface WorkoutEntry {
  id: string;
  userName: string;
  workoutType: string;
  workoutMinutes: number;
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workoutEntries: WorkoutEntry[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadFromLocalStorage(); // ✅ Only load data in the browser
    }
  }

  private loadFromLocalStorage(): void {
  if (isPlatformBrowser(this.platformId)) { 
    const storedData = localStorage.getItem('workoutEntries');
    console.log("Stored Data:", storedData); // ✅ Debugging Log

    if (storedData) {
      this.workoutEntries = JSON.parse(storedData);
    } else {
      this.initializeSampleData();
    }
  }
}


  private initializeSampleData(): void {
    this.workoutEntries = [
      { id: this.generateId(), userName: 'John Doe', workoutType: 'Running', workoutMinutes: 30 },
      { id: this.generateId(), userName: 'John Doe', workoutType: 'Cycling', workoutMinutes: 45 },
      { id: this.generateId(), userName: 'Jane Smith', workoutType: 'Swimming', workoutMinutes: 60 },
      { id: this.generateId(), userName: 'Jane Smith', workoutType: 'Running', workoutMinutes: 20 },
      { id: this.generateId(), userName: 'Mike Johnson', workoutType: 'Yoga', workoutMinutes: 50 },
      { id: this.generateId(), userName: 'Mike Johnson', workoutType: 'Cycling', workoutMinutes: 40 }
    ];
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(): void {
    if (isPlatformBrowser(this.platformId)) { // ✅ Only save data in the browser
      localStorage.setItem('workoutEntries', JSON.stringify(this.workoutEntries));
    }
  }

  getWorkoutEntries(): WorkoutEntry[] {
    return this.workoutEntries;
  }

  addWorkoutEntry(entry: Omit<WorkoutEntry, 'id'>): void {
    const newEntry = { ...entry, id: this.generateId() };
    this.workoutEntries.push(newEntry);
    this.saveToLocalStorage();
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
