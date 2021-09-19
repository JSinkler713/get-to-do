import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../mock-tasks'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: [  './task.component.css']
})
export class TaskComponent implements OnInit {
  @Input()
  task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }
  deleteTask(task: Task) {
    // we will use an eventEmitter to pass up to the parent
    this.onDeleteTask.emit(task)
  }

}
