import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../prisma/prisma.service';
import { UsersModule } from '../users/users.module';
import { ProjectsModule } from '../projects/projects.module';
import { SectionsModule } from '../sections/sections.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PassportModule,
    UsersModule,
    ProjectsModule,
    SectionsModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [AuthService, PrismaService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
