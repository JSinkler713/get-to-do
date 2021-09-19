import { Injectable } from '@angular/core';
// observables for async data
import { of, Observable } from 'rxjs'
import { TASKS, Task } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // our service method to get TASKS
  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS)
    return tasks
  }
}
