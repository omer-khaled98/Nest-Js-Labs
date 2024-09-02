import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/core/schema/posts.schema';
import { postDTO } from './dto/posts.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}
  getPosts() {
    return this.postModel.find({});
    //  'hello from Posts';
  }

  addPost(body: postDTO) {
    this.postModel.insertMany(body);
    return 'added';
  }
}
