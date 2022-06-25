import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto';
import * as argon from 'argon2';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async login(dto: LoginDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!existingUser) throw new ForbiddenException('no use found');

    const pwMatch = await argon.verify(existingUser.password, dto.password);
    if (!pwMatch) throw new ForbiddenException('no use found');

    return existingUser;
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
