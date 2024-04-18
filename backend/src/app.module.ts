import { Module } from '@nestjs/common';
import { PeopleController } from './controller/people.controller';
import { PeopleService } from './service/people.service';
import { PrismaService } from './service/prisma.service';

@Module({
  imports: [],
  controllers: [PeopleController],
  providers: [PrismaService, PeopleService],
})
export class AppModule {}
