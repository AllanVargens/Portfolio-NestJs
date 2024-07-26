import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResponseUserDto } from './dto/ResponseUserDto';

// This should be a real class/interface representing a user entity

@Injectable()
export class UsersService {
  constructor(private prismaservice: PrismaService) {}

  async findOne(username: string): Promise<ResponseUserDto | undefined> {
    return this.prismaservice.user.findUnique({
      where: { username },
      select: { id: true, email: true, username: true, name: true, role: true },
    });
  }
}
