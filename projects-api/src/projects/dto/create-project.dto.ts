import { IsString, IsOptional, IsArray, IsUrl } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty({
    example: 'Project Name',
  })
  @IsString()
  title: string;
  @ApiProperty({
    example: 'A description about the project',
  })
  @IsOptional()
  @IsString()
  description?: string;
  @ApiProperty({
    example: 'http://example.com',
  })
  @IsOptional()
  @IsUrl()
  projectUrl?: string;
  @ApiProperty({
    example: 'http://example.com',
  })
  @IsOptional()
  @IsUrl()
  githubUrl?: string;
  @ApiProperty({
    example: 'http://example.com',
  })
  @IsOptional()
  @IsString()
  projectImage?: string;
  @ApiProperty({
    example: 'http://example.com',
  })
  @IsOptional()
  @IsString()
  projectVideo?: string;
  @ApiProperty({
    example: ['Javascript', 'SpringBoot'],
  })
  @IsArray()
  @IsString({ each: true })
  tagsBack: string[];
  @ApiProperty({
    example: 'description about the back-end',
  })
  @IsOptional()
  @IsString()
  backendAbout?: string;
  @ApiProperty({
    example: ['Javascript', 'SpringBoot'],
  })
  @IsArray()
  @IsString({ each: true })
  tagsFront: string[];
  @ApiProperty({
    example: 'description about the front-end',
  })
  @IsOptional()
  @IsString()
  frontendAbout?: string;

  @IsString()
  userId: string;
}
