import {
  Controller,
  Get,
  Body,
  Post,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

// Cuando se solicite lo que va entre '', ejecutará con los metodos declarados en esta clase
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  // El DTO nos sirve para aclarar la info que llega desde el cliente.
  createTask(@Body() newTask: CreateTaskDto) {
    return this.tasksService.createTask(newTask.title, newTask.description);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTask(id);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updateFields: UpdateTaskDto) {
    return this.tasksService.updateTask(id, updateFields);
  }
}
