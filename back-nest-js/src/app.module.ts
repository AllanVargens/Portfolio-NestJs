import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "./users/users.module";
import { ProjectsModule } from "./projects/projects.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, ProjectsModule, AuthModule],
})
export class AppModule {}
