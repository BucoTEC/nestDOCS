import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Length(3, 20)
  password: string;

  @IsNotEmpty()
  @Length(2, 20)
  firstName: string;

  @IsNotEmpty()
  @Length(2, 20)
  lastName: string;
}
