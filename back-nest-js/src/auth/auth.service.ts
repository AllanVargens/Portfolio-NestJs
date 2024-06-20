import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";
import { passwordComparer } from "src/utils/encrypt.utils";

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(
    username: string,
    pass: string
  ): Promise<{ access_token: string }> {
    const user = await this.userService.findByUsername(username);
    if (!passwordComparer(pass, user?.password)) {
      throw new UnauthorizedException(username + " is not authorized");
    }

    const payload = { sub: user.id, username: user.username };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
