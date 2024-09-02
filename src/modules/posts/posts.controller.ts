import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { postDTO } from './dto/posts.dto';

@Controller('posts')
export class PostsController {
  constructor(private _postsService: PostsService) {}

  @Get()
  getPosts() {
    return this._postsService.getPosts();
  }

  @Post()
  addPost(@Body() Body: postDTO) {
    return this._postsService.addPost(Body);
  }
}
