import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  response = {
    id: true,
    title: true,
    description: true,
    projectUrl: true,
    githubUrl: true,
    projectImage: true,
    projectVideo: true,
    tagsBack: true,
    backendAbout: true,
    tagsFront: true,
    frontendAbout: true,
    userId: true,
  };
  async create(data: CreateProjectDto) {
    try {
      const {
        backendAbout,
        description,
        frontendAbout,
        githubUrl,
        projectImage,
        projectUrl,
        projectVideo,
        tagsBack,
        tagsFront,
        title,
        userId,
      } = data;
      const foundUser = this.prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      const foundProject = await this.prisma.project.findFirst({
        where: {
          title: title,
        },
      });

      if (!foundUser) {
        Logger.error("User don't founded", '', 'UserService', true);
        throw new NotFoundException("User don't founded");
      } else if (foundProject) {
        Logger.error('Project already exists', '', 'ProjectsService', true);
        throw new Error('Project already exists');
      }

      return await this.prisma.project.create({
        data: {
          title,
          description,
          backendAbout,
          frontendAbout,
          githubUrl,
          projectImage,
          projectUrl,
          projectVideo,
          tagsBack,
          tagsFront,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
    } catch (e) {
      Logger.error(e.message, '', 'ProjectsService', true);
      throw new Error(e.message);
    }
  }

  findAll() {
    return this.prisma.project.findMany();
  }

  findOne(id: number) {
    return this.prisma.project.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const project = await this.prisma.project.findFirst({
      where: {
        id,
      },
    });

    if (!project) {
      throw new NotFoundException(`Project #${id} not found`);
    }

    return await this.prisma.project.update({
      where: { id },
      data: updateProjectDto,
    });
  }

  async remove(id: number) {
    const project = await this.prisma.project.findFirst({
      where: {
        id,
      },
    });

    if (!project) {
      throw new NotFoundException(`Project #${id} not found`);
    }

    return await this.prisma.project.delete({
      where: { id },
    });
  }
}
