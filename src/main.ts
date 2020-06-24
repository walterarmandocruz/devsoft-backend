/* eslint-disable @typescript-eslint/no-inferrable-types */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const serverPort: number = 3000;
  app.setGlobalPrefix('api');
  await app.listen(serverPort);

  console.log(`El server esta corriendo en el puerto: ${serverPort}`)
}

bootstrap();
