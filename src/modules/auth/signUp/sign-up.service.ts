import { Injectable, Body, HttpException, HttpStatus } from '@nestjs/common';

import { signUpDTO } from '../dto/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/core/schema/user.scema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
@Injectable()
export class SignUpService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async signUp(body: signUpDTO) {
    let user = await this.userModel.findOne({ email: body.email });
    if (user) throw new HttpException('exsist', HttpStatus.FOUND);

    body.password = await bcrypt.hash(body.password, 8);

    let addUser = await this.userModel.insertMany(body);
    return { messge: 'success', addUser };
  }
}
