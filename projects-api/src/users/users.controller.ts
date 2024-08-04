import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { Public } from 'src/auth/constants';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Public()
  @HttpCode(HttpStatus.FOUND)
  @Get('users/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }
}
