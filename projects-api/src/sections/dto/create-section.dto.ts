import { IsNotEmpty, IsString, IsInt, IsUrl } from '@nestjs/class-validator';

export class CreateSectionDto {
  @IsNotEmpty()
  @IsUrl()
  imageURL: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsInt()
  projectId: number;
}
