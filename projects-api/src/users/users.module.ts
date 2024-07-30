import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService, PrismaService],
  imports: [],
  controllers: [UsersController],
})
export class UsersModule {}
