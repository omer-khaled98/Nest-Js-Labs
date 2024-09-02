import { Optional } from '@nestjs/common';
import {
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { User } from 'src/core/schema/user.scema';

export default class addPostDTO {
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  // @IsNotEmpty()
  title: string;

  @IsString()
  @MinLength(3)
  @MaxLength(300)
  info: string;

  @IsMongoId()
  @IsOptional()
  userId: User;
}

export class paramDTO {
  @IsMongoId()
  id: string;
}
