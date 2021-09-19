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
  deleteTask(task: Task) {
    console.log('deleting from the parent')
    console.log(task)
    // updates backend, use filter to update frontend as well
    this.taskService.deleteTask(task).subscribe(()=> this.tasks = this.tasks.filter((t)=> t.id !== task.id))
  }

}
