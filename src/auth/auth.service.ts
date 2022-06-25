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
  async register(dto: RegisterDto) {
    const hashedPassword = await argon.hash(dto.password);

    const newUser = await this.prisma.user.create({
      data: {
        firstName: dto.firstName,
        lastName: dto.lastName,
        email: dto.email,
        password: hashedPassword,
      },
    });

    return {
      mgs: 'newUserCreated',
      newUser: { firstName: newUser.firstName, email: newUser.email },
    };
  }
}
