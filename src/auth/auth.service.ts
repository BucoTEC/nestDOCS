import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return 'login serviceeee';
  }
  register() {
    return 'register service';
  }
}
