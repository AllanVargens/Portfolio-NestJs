import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  UseGuards,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ResponseUserObject } from "./dto/response-user.object";

import { AuthGuard } from "../auth/auth.guard";

@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @ApiBody({ description: "Create User DTO", type: CreateUserDto })
  @ApiOperation({ summary: "Create user" })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: "The user has been successfully created.",
    type: ResponseUserObject,
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({ summary: "Find All Users" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Returns an array of users",
    type: [ResponseUserObject],
  })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @ApiOperation({ summary: "Find one user" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Returns a user",
    type: ResponseUserObject,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(id);
  }
  @UseGuards(AuthGuard)
  @ApiBody({ type: UpdateUserDto })
  @ApiOperation({ summary: "Update user" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "The user has been successfully updated.",
    type: ResponseUserObject,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Remove user" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "The user has been successfully removed.",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(id);
  }
}
