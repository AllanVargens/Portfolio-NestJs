import { Module } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { SectionsController } from './sections.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [SectionsController],
  providers: [SectionsService, PrismaService],
})
export class SectionsModule {}
