import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
     app.useGlobalPipes(new ValidationPipe());


      // Configuration CORS
  app.enableCors({
    origin: 'http://localhost:5173', // URL de ton frontend React
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,               // si tu utilises les cookies (optionnel)
  });

  
  await app.listen(3000);
}
bootstrap();
