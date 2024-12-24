import { Component } from '@angular/core';
import { Task, TaskService } from '../task.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [NgFor],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[];
  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  addTask(taskTitle: string) {
    this.taskService.addTask(taskTitle);
    this.updateTasks();
  }

  toggleTaskCompletion(id: number): void {
    this.taskService.toggleTaskCompletion(id);
    this.updateTasks();
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.updateTasks();
  }

  private updateTasks(): void {
    this.tasks = this.taskService.getTasks();
  }
}
