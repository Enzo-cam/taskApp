import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';

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

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  updateTask(id: string, updateFields: UpdateTaskDto): Task {
    const task = this.getTaskById(id);
    const newTask = Object.assign(task, updateFields);

    this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task));
    return newTask;
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
