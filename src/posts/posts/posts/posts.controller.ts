import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  sayHello() {
    return ' hello from psots';
  }
}
