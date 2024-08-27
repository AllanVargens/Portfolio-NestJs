import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @ApiOperation({ summary: 'find a user' })
  @ApiResponse({
    status: HttpStatus.FOUND,
    description: 'The user has founded.',
  })
  @HttpCode(HttpStatus.FOUND)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }
}
