import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import type { AppConfig } from './config/configuration.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  const config = app.get(ConfigService<AppConfig, true>);
  const port = config.get('port', { infer: true });
  await app.listen(port);
  Logger.log(`Application is running on port ${port}`, 'Bootstrap');
}
await bootstrap();
