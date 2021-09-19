import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';

import {TASKS, Task} from '../../mock-tasks'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = []

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // call our service method getTasks
    // subscri be to it since it is an observable
    this.taskService.getTasks().subscribe((tasks)=> this.tasks = tasks);
  }

}
