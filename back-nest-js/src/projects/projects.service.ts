import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  response = {
    id: true,
    project_name: true,
    description: true,
    ImageURL: true,
    link: true,
    username: true,
    user_id: true,
  };

  async create(data: CreateProjectDto) {
    try {
      const { project_name, description, ImageURL, link, user_id, username } =
        data;
      const foundUser = await this.prisma.user.findFirst({
        where: {
          username,
        },
      });

      if (!foundUser) {
        Logger.error("User don't founded", "", "UserService", true);
        throw new NotFoundException("User don't founded");
      }

      const project = await this.prisma.projects.create({
        data: {
          project_name,
          description,
          ImageURL,
          link,
          user_id,
        },
        select: this.response,
      });
      return project.project_name;
    } catch (error) {
      Logger.error(error);
      throw new Error(error);
    }
  }

  async findAll() {
    return await this.prisma.projects.findMany({
      select: this.response,
    });
  }

  async findOne(id: string) {
    const project = await this.prisma.projects.findUnique({
      where: {
        id,
      },
    });

    if (!project) {
      throw new NotFoundException("Project not found");
    }

    return project;
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    const project = await this.prisma.projects.findUnique({
      where: {
        id,
      },
    });

    if (!project) {
      throw new NotFoundException("Project not found");
    }

    const { ImageURL, description, link, project_name } = updateProjectDto;

    return await this.prisma.projects.update({
      where: {
        id,
      },
      data: {
        project_name,
        description,
        ImageURL,
        link,
      },
    });
  }

  async remove(id: string) {
    const project = await this.prisma.projects.findUnique({
      where: {
        id,
      },
    });

    if (!project) {
      throw new NotFoundException("Project not found");
    }

    await this.prisma.projects.delete({
      where: {
        id,
      },
    });

    return `This action removes a #${id} project`;
  }
}
