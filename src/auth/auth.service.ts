import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  login(dto: LoginDto) {
    return dto;
  }
  register() {
    return 'register service';
  }
}
