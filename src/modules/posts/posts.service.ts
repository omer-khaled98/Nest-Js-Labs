import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/core/schema/posts.schema';
import addPostDTO, { paramDTO } from './dto/posts.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}
  async getPosts() {
    return await this.postModel.find().populate('userId');
    //  'hello from Posts';
  }

  async addPost(body: addPostDTO) {
    await this.postModel.insertMany(body);
    return 'added';
  }

  async upadatePost(body: addPostDTO, id: string) {
    let upDate = await this.postModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    return { message: 'updated' };
  }

  async deletePost(id: string) {
    await this.postModel.findByIdAndDelete(id);

    return { message: 'deleted' };
  }
}
