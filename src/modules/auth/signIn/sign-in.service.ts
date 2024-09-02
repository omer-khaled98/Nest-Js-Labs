import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { signInDTO } from '../dto/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/core/schema/user.scema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class SignInService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,

    private _jwtService: JwtService,
  ) {}

  async signIn(info: signInDTO) {
    let user = await this.userModel.findOne({ email: info.email });

    if (user && (await bcrypt.compare(info.password, user.password))) {
      let token = this._jwtService.sign({ name: user.name, email: user.email });
      return { message: 'wellcome', token };
    } else {
      throw new HttpException('email Or pass wrong', HttpStatus.FOUND);
    }
  }
}
