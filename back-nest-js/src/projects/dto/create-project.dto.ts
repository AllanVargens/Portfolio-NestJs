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
    example: ["image1.com", "image2.com"],
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

  @IsString()
  @IsNotEmpty()
  readonly user_id: string;
}
