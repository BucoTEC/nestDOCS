import { IsEmail, IsNotEmpty, Min } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Min(4)
  password: string;

  @IsNotEmpty()
  @Min(2)
  firstName: string;

  @Min(2)
  @IsNotEmpty()
  lastName: string;
}
