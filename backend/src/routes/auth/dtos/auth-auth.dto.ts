import { IsNotEmpty, IsEmail, IsUrl } from 'class-validator';

export class AuthAuth {
  @IsNotEmpty()
  id_auth: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsUrl()
  picture: string;

  @IsNotEmpty()
  name: string;
}
