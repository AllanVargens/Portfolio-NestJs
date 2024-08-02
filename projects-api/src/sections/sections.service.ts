import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SectionsService {
  constructor(private prisma: PrismaService) {}
  async create(createSectionDto: CreateSectionDto) {
    const { description, imageURL, projectId } = createSectionDto;

    const foundProject = await this.prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!foundProject) {
      throw new NotFoundException(`Project #${projectId} not found`);
    }

    return await this.prisma.section.create({
      data: { description, imageURL, projectId },
    });
  }

  findAll() {
    return this.prisma.section.findMany();
  }

  async update(
    projectId: number,
    id: number,
    updateSectionDto: UpdateSectionDto,
  ) {
    const foundProject = await this.prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!foundProject) {
      throw new NotFoundException(`Project #${projectId} not found`);
    }

    return await this.prisma.section.update({
      where: { id, projectId },
      data: updateSectionDto,
    });
  }

  async remove(projectId: number, id: number) {
    const foundProject = await this.prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!foundProject) {
      throw new NotFoundException(`Project #${projectId} not found`);
    }

    return await this.prisma.section.delete({
      where: { id, projectId },
    });
  }
}
