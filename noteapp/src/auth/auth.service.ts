import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
constructor(
  private userService: UserService,
  private jwtService: JwtService,
  private configService: ConfigService,
) {}
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
  }

async login(user: any) {
  const payload = { email: user.email, sub: user._id };
  const token = this.jwtService.sign(payload, {
    secret: this.configService.get('JWT_SECRET'),
    expiresIn: '3h',
  });

  return {
    access_token: token,
    user,
  };
}
}