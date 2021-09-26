import { Injectable } from '@angular/core';
// http client instead of fetch, update app.module to bring it in as well
import {HttpClient, HttpHeaders} from '@angular/common/http';
// observables for async data
import { of, Observable } from 'rxjs'
import { TASKS, Task } from '../mock-tasks';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // our fake backend api
  private apiUrl = 'http://localhost:3000/tasks'

  constructor(private http: HttpClient) { }

  // our service method to get TASKS
  getTasks(): Observable<Task[]> {
    // using the server
    return this.http.get<Task[]>(this.apiUrl)
  }
  // will return an observable bc http works that way
  deleteTask(task: Task): Observable<Task> {
    //this.http.delete(id)
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }
  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions)
  }
  addTask(task: Task): Observable<Task> {
    console.log('in the task.service.addTask method')
    return this.http.post<Task>(this.apiUrl, task, httpOptions)
  }
}
