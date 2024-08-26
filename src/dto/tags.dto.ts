import {
  IsEmpty,
  isEmpty,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class TagsDot {
  id: number;

  @IsString()
  //   @IsEmpty()
  @IsNotEmpty()
  @MinLength(2)
  //   @MaxLength()
  name: string;
}
