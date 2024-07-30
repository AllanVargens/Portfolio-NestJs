import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ResponseUserDto } from './dto/ResponseUserDto';

// This should be a real class/interface representing a user entity

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async findOne(id: string): Promise<ResponseUserDto | NotFoundException> {
    const user = this.prismaService.user.findUnique({
      where: { id },
      select: { id: true, email: true, username: true, name: true, role: true },
    });
    if (!user) {
      Logger.error('User not found', '', 'UserService', true);
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
