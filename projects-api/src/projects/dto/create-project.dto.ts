import { IsString, IsOptional, IsArray, IsUrl } from '@nestjs/class-validator';

export class CreateProjectDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsUrl()
  projectUrl?: string;

  @IsOptional()
  @IsUrl()
  githubUrl?: string;

  @IsOptional()
  @IsString()
  projectImage?: string;

  @IsOptional()
  @IsString()
  projectVideo?: string;

  @IsArray()
  @IsString({ each: true })
  tagsBack: string[];

  @IsOptional()
  @IsString()
  backendAbout?: string;

  @IsArray()
  @IsString({ each: true })
  tagsFront: string[];

  @IsOptional()
  @IsString()
  frontendAbout?: string;

  @IsString()
  userId: string;
}
