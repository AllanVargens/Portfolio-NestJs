import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  // @ApiOperation({ summary: 'login' })
  // @ApiResponse({
  //   status: HttpStatus.OK,
  // })
  // @ApiBody({ type: LoginDto })
  // @HttpCode(HttpStatus.OK)
  // @Post('login')
  // signIn(@Body() signInDto: Record<string, any>) {
  //   return this.authService.validateUser(
  //     signInDto.username,
  //     signInDto.password,
  //   );
  // }

  // @UseGuards(LocalAuthGuard)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }
}
