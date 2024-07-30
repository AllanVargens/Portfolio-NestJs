import { Prisma } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from '@nestjs/class-validator';

export class CreateProjectDto {
  @ApiProperty({
    type: String,
    description: 'The title of the project',
  })
  @IsString()
  @IsNotEmpty()
  readonly title: string;
  @ApiProperty({
    type: String,
    description: 'The description of the project',
  })
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @ApiProperty({
    type: String,
    description: 'The public url about the project',
  })
  @IsString()
  readonly projectUrl: string;
  @ApiProperty({
    type: String,
    description: 'The project image',
  })
  @IsString()
  readonly projectImage: string;
  @ApiProperty({
    type: String,
    description: 'The project video on youtube',
  })
  @IsString()
  readonly projectVideo: string;
  @ApiProperty({
    type: String,
    description: 'The project github url',
  })
  @IsString()
  readonly githubUrl: string;
  @ApiProperty({
    description: 'The project stack',
  })
  readonly tagsBack: string[];
  @ApiProperty({
    type: String,
    description: 'a description about the back end of the project',
  })
  @IsString()
  readonly backendAbout: string;
  @ApiProperty({
    description: 'The project stack',
  })
  readonly tagsFront: string[];
  @ApiProperty({
    type: String,
    description: 'a description about the front end of the project',
  })
  readonly frontendAbout: string;
  readonly sections?: Prisma.SectionUncheckedCreateNestedManyWithoutProjectInput;
  readonly user: Prisma.UserCreateNestedOneWithoutProjectsInput;
}
