import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // Carga todos los modulos
  const app = await NestFactory.create(AppModule);

  // Esta linea aclara que cuando YO cree validaciones deben validarse siempre.
  app.useGlobalPipes(new ValidationPipe)
  await app.listen(3000);
}
bootstrap();
