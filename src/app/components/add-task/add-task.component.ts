import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Task} from '../../mock-tasks'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  // This will be the function called in the parent

  text: string = '';
  day: string = '';
  reminder: boolean = false;
  task: Task | any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task!')
      return
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.task = newTask
    // TODO: going ot emit an event to add in the parent
    //console.log('about to emit')
    this.onAddTask.emit(newTask)

    // clear back to normal
    this.text = ''
    this.day = ''
    this.reminder = false
  }

}
