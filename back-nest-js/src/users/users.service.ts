import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "../prisma/prisma.service";
import { passwordHasher } from "../utils/encrypt.utils";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  response = {
    id: true,
    name: true,
    username: true,
    email: true,
    projects: true,
  };
  async create(data: CreateUserDto) {
    try {
      const { username, password, email, name } = data;
      const foundUser = await this.prisma.user.findFirst({
        where: {
          name,
          username,
          email,
        },
      });

      if (foundUser) {
        Logger.error("User already created", "", "UserService", true);
        throw new ConflictException("User already created");
      }

      const { hash } = await passwordHasher(password);
      data = { ...data, password: hash };

      const user = await this.prisma.user.create({
        data,
        select: this.response,
      });

      return user;
    } catch (error) {
      Logger.error(error);
      throw new Error(error);
    }
  }

  async findAll() {
    return this.prisma.user.findMany({
      select: this.response,
    });
  }

  async findOne(id: string) {
    const foundUser = await this.prisma.user.findUnique({
      where: {
        id,
      },
      select: this.response,
    });

    if (!foundUser) {
      Logger.error("User not found", "", "UserService", true);
      throw new NotFoundException("User not found");
    }

    return foundUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const foundUser = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!foundUser) {
      Logger.error("User not found", "", "UserService", true);
      throw new NotFoundException("User not found");
    }

    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: updateUserDto,
      select: this.response,
    });
  }

  async remove(id: string) {
    const foundUser = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!foundUser) {
      Logger.error("User not found", "", "UserService", true);
      throw new NotFoundException("User not found");
    }
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
