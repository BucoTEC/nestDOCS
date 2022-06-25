import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto';
import * as argon from 'argon2';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async login(dto: LoginDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!existingUser) throw new ForbiddenException('no use found');

    const pwMatch = await argon.verify(existingUser.password, dto.password);
    if (!pwMatch) throw new ForbiddenException('no use found');

    const token = await this.singToken(existingUser.id, existingUser.email);
    return { msg: 'login successful', token };
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

  async singToken(userId: number, email: string): Promise<string> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET');
    return this.jwt.sign(payload, {
      expiresIn: '30min',
      secret,
    });
  }
}
