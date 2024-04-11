import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  readonly project_name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsArray()
  readonly ImageURL: string[];

  @IsString()
  @IsNotEmpty()
  readonly link: string;

  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  readonly user_id: string;
}
