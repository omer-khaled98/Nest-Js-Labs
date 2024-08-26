import { Module } from '@nestjs/common';
import { PostsController } from './posts/posts/posts.controller';

@Module({
  controllers: [PostsController]
})
export class PostsModule {}
