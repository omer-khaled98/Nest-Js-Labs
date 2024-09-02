import { JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { SignUpController } from './signUp/sign-up.controller';
import { SignInController } from './signIn/sign-in.controller';
import { SignInService } from './signIn/sign-in.service';
import { SignUpService } from './signUp/sign-up.service';
// import mongoose from 'mongoose';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { User, userSchema } from 'src/core/schema/user.scema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
  ],
  controllers: [SignUpController, SignInController],
  providers: [SignInService, SignUpService, JwtService],
})
export class AuthModule {}
