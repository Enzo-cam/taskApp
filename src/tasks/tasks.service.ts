import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';

// Injectable pq se inyecta en otras partes.
@Injectable()
export class TasksService {
  //Se declara private para que solo se pueda acceder en esta clase.
  private tasks: Task[] = [
    {
      id: '1',
      title: 'First task',
      description: 'First task of nest',
      status: TaskStatus.PENDING,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }

  createTask(title: string, description: string) {
    const newTask = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING,
    };

    this.tasks.push(newTask);
    return newTask;
  }

  updateTask() {}

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
