import { Injectable } from '@angular/core';
// http client instead of fetch, update app.module to bring it in as well
import {HttpClient, HttpHeaders} from '@angular/common/http';
// observables for async data
import { of, Observable } from 'rxjs'
import { TASKS, Task } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // our fake backend api
  private apiUrl = 'http://localhost:3000/tasks'

  constructor(private http: HttpClient) { }

  // our service method to get TASKS
  getTasks(): Observable<Task[]> {
    //const tasks = of(TASKS)
    //return tasks

    // using the server
    return this.http.get<Task[]>(this.apiUrl)
  }
}
