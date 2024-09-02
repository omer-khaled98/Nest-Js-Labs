import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './user.scema';

@Schema({ timestamps: true, versionKey: false })
export class Post {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  info: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User;
}

export const PostSchema = SchemaFactory.createForClass(Post);
