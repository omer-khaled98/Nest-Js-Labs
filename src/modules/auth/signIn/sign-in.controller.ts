import { Body, Controller, Post } from '@nestjs/common';
import { signInDTO } from '../dto/auth.dto';

@Controller('sign-in')
export class SignInController {
  @Post()
  signIn(@Body() body: signInDTO) {}
}
