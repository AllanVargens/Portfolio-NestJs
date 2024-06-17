import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    example: "Allan Vargens",
    description: "Name of the user",
  })
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @ApiProperty({
    example: "allan.vargens",
    description: "Nickname of the user",
  })
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({
    example: "john.doe@example.com",
    description: "The email of the user",
  })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
  @ApiProperty({
    example: "password123",
    description: "The password of the user",
  })
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
