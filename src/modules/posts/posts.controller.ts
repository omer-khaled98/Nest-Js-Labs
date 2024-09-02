import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import addPostDTO, { paramDTO } from './dto/posts.dto';
import { AuthGuard } from 'src/core/guard/auth.guard';
// import { addPostDTO } from './dto/posts.dto';

@Controller('posts')
@UseGuards(AuthGuard)
export class PostsController {
  constructor(private _postsService: PostsService) {}

  @Get()
  getPosts() {
    return this._postsService.getPosts();
  }

  @Post()
  addPost(@Body() body: addPostDTO, @Req() req: any) {
    body.userId = req['userId'];

    return this._postsService.addPost(body);
  }
  @Put(':id')
  updatePost(@Body() Body: addPostDTO, @Param() param: paramDTO) {
    return this._postsService.upadatePost(Body, param.id);
  }
  @Delete(':id')
  deletPost(@Param() param: paramDTO) {
    return this._postsService.deletePost(param.id);
  }
}
