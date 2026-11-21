import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {

  const CORS: CorsOptions = {
    origin: [
      'http://localhost:4200',
      'http://localhost:4300',
      'https://dp-workgroup-npuw.vercel.app',
      'https://dp-workgroup-gamp.vercel.app'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'app-type'
    ],
  };

  const app = await NestFactory.create(AppModule);
  app.enableCors(CORS);
  app.setGlobalPrefix('api')
  // await app.listen(process.env.PORT ?? 3000, '192.168.1.18');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
