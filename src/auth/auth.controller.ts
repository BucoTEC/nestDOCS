import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthControler {
  constructor(private authService: AuthService) {}
  @Post('login')
  login() {
    return 'login route';
  }

  @Post('register')
  register() {
    return 'register route';
  }
}
