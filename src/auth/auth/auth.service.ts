import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  users = [
    {
      id: 1,
      name: 'mohamed',
      email: 'mmm@gmail.com',
      paasword: '123',
    },
    {
      id: 2,
      name: 'ahmed',
      email: 'aaa@gmail.com',
      paasword: '123',
    },
    {
      id: 3,
      name: 'ali',
      email: 'lll@gmail.com',
      paasword: '123',
    },
    {
      id: 4,
      name: 'amr',
      email: 'rrr@gmail.com',
      paasword: '123',
    },
  ];

  getAllUsers() {
    return this.users;
  }
  addUser(body) {
    let user = this.users.find(
      (user) => user.email === body.email && user.paasword == body.paasword,
    );
    if (user) {
      return 'user exsit';
    } else {


      body.id = this.users[this.users.length - 1].id + 1;
      this.users.push(body);
      return { message: body.id };
    }
  }

  signIn(body: { email: string; paasword: string; }) {
    let user = this.users.find(
      (user) => user.email === body.email && user.paasword == body.paasword,
    );
    return user ? 'founded' : 'Not Founded';
  }
}
