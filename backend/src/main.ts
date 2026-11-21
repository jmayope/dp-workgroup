import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {

  const allowedOrigins = [
    'http://localhost:4200',
    'http://localhost:4300',
    'https://dp-workgroup-npuw.vercel.app',
    process.env.FRONTEND_URL,
    process.env.FRONTEND_PREVIEW_URL
  ].filter((origin): origin is string => Boolean(origin));

  const CORS: CorsOptions = {
    origin: (origin, callback) => {
      // Permitir solicitudes sin Origin (health checks, herramientas, etc.)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`Origen no permitido por CORS: ${origin}`));
    },
    // [
    //   'http://localhost:4200',
    //   'http://localhost:4300',
    //   'https://dp-workgroup-npuw.vercel.app',
    // ],
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
  // app.setGlobalPrefix('api')
  // await app.listen(process.env.PORT ?? 3000, '192.168.1.18');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
