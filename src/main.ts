import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 4000;
  console.log('Running on port: ' + port);
  await app.listen(port);
}
bootstrap();
