import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: Boolean = false; // the real showAddTask value all are based off
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    console.log('in the toggleAddTask function in service')
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask)
  }
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
