import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: ['http://localhost:5173'],
    methods: ['POST', 'GET', 'DELETE', 'PATCH', 'PUT'],
  })
  await app.listen(3000)
}
bootstrap()
