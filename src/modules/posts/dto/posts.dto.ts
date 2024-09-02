import { IsNotEmpty } from 'class-validator';
import { User } from 'src/core/schema/user.scema';

export class postDTO {
  @IsNotEmpty()
  // @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  info: string;

  userId: User;
}
