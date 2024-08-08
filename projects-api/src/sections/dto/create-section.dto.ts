import { IsNotEmpty, IsString, IsInt, IsUrl } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSectionDto {
  @ApiProperty({
    example: 'http://example.com',
  })
  @IsNotEmpty()
  @IsUrl()
  imageURL: string;
  @ApiProperty({
    example: 'a description about the image',
  })
  @IsNotEmpty()
  @IsString()
  description: string;
  @ApiProperty({
    example: 1,
  })
  @IsNotEmpty()
  @IsInt()
  projectId: number;
}
