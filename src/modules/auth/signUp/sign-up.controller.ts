import { Body, Controller, Post } from '@nestjs/common';
import { SignUpService } from './sign-up.service';
import { signUpDTO } from '../dto/auth.dto';

@Controller('signup')
export class SignUpController {
  constructor(private _signUpService: SignUpService) {}
  @Post()
  signup(@Body() body: signUpDTO) {
    return this._signUpService.signUp(body);
  }
}
