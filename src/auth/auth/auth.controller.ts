import { AuthModule } from './../auth.module';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private _authService: AuthService) {}

  @Get()
  allUsers() {
    return this._authService.getAllUsers();
  }

  @Post()
  addUser(@Body() body) {
    return this._authService.addUser(body);
  }

  @Get('sign')
  signIn(@Body() body) {
    return this._authService.signIn(body);
  }
}
