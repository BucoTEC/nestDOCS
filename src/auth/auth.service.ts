import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto';
import * as argon from 'argon2';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  login(dto: LoginDto) {
    return dto;
  }
  register(dto: RegisterDto) {
    return { mgs: 'register route', dto };
  }
}
