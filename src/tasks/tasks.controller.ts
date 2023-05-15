import { Controller, Get } from '@nestjs/common';

// Cuando se solicite lo que va entre '', ejecutará con los metodos declarados en esta clase
@Controller('tasks')
export class TasksController {
  
  @Get()
  helloworld() {
    return 'Hello gente';
  }
}
