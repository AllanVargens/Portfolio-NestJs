import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class CreateProjectDto {
  @ApiProperty({
    example: "Project 1",
    description: "Name of the project",
  })
  @IsString()
  @IsNotEmpty()
  readonly project_name: string;
  @ApiProperty({
    example: "This is a description of the project",
    description: "Description of the user",
  })
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @ApiProperty({
    example: "['image1.com.br', 'image2.com.br', 'image3.com.br']",
    description: "List of images about the project",
  })
  @IsArray()
  readonly ImageURL: string[];
  @ApiProperty({
    example: "projectUrl.com.br",
    description: "URL of your project",
  })
  @IsString()
  @IsNotEmpty()
  readonly link: string;
  @ApiProperty({
    example: "1e93c527-3265-4c05-9772-b8233e703108",
    description: "user_id that the project belongs",
  })
  @IsString()
  @IsNotEmpty()
  readonly user_id: string;
}
