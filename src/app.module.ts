import { Module } from '@nestjs/common'

import { ConfigModule } from '@nestjs/config'
import { PrismaService } from './database/prisma.service'

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
