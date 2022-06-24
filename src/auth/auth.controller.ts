import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller({})
export class AuthControler {
  constructor(private authService: AuthService) {}
}
