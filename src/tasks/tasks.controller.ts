import { Controller, Get, Body, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

// Cuando se solicite lo que va entre '', ejecutará con los metodos declarados en esta clase
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() newTask: any) {
    console.log(newTask);
    return 'Probando post';
    // return this.tasksService.createTask()
  }
}
