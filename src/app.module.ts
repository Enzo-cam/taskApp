import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

// Decorador
@Module({
  // Añadir funcionalidades extra
  imports: [TasksModule],
  // Rutas que tendrá este modulo
  controllers: [],
  // Funciones encargadas de comunicarse con la BDD y reutilizables
  providers: [],
})
export class AppModule {}
