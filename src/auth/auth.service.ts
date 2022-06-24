import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    console.log('login service');
  }
  register() {
    console.log('register service');
  }
}
