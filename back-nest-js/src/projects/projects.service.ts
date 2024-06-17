import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { PrismaService } from "../prisma/prisma.service";

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

  async create(data: CreateProjectDto & { user_id: string }) {
    try {
      const { project_name, description, ImageURL, link, user_id } = data;
      const foundUser = await this.prisma.user.findFirst({
        where: {
          id: user_id,
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

  async findAll(user_id: string) {
    return await this.prisma.projects.findMany({
      where: {
        user_id,
      },
      select: this.response,
    });
  }

  async findOne(user_id: string, id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: user_id,
      },
    });

    if (!user) {
      throw new NotFoundException("Project not found");
    }

    const project = await this.prisma.projects.findUnique({
      where: {
        user_id,
        id,
      },
    });

    if (!project) {
      throw new NotFoundException("Project not found");
    }

    return project;
  }

  async update(
    user_id: string,
    id: string,
    updateProjectDto: UpdateProjectDto
  ) {
    const project = await this.prisma.projects.findUnique({
      where: {
        user_id,
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

  async remove(user_id: string, id: string) {
    const project = await this.prisma.projects.findUnique({
      where: {
        user_id,
        id,
      },
    });

    if (!project) {
      throw new NotFoundException("Project not found");
    }

    await this.prisma.projects.delete({
      where: {
        user_id,
        id,
      },
    });

    return `This action removes a #${id} project`;
  }
}
