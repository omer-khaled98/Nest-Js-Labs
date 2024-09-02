import {
  Equals,
  IsEmail,
  IsNotEmpty,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

const om = new RegExp(/^[a-z1-9]{3}$/);
export class signUpDTO {
  @MinLength(3)
  @IsNotEmpty()
  @MaxLength(10)
  name: string;

  @MinLength(3)
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @MinLength(3)
  @IsNotEmpty()
  password: string;
}

export class signInDTO {
  @MinLength(3)
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @MinLength(3)
  @IsNotEmpty()
  password: string;
}
