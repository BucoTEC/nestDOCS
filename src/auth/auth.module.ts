import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthControler } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthControler],
  providers: [AuthService],
})
export class AuthModule {}
