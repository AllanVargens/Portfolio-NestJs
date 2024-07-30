import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(prisma: PrismaService) {}
  create(data: CreateProjectDto) {
    try {
      const {
        title,
        description,
        sections,
        backendAbout,
        frontendAbout,
        githubUrl,
        projectImage,
        projectUrl,
        projectVideo,
        tagsBack,
        tagsFront,
        user,
      } = data;

    } catch (e) {}
  }

  findAll() {
    return `This action returns all projects`;
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
