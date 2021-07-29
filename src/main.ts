import { NestFactory } from '@nestjs/core';
import { fastifyHelmet } from 'fastify-helmet';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  // Fastify security headers
  await app.register(fastifyHelmet);

  await app.listen(3000);
}
bootstrap();
