import { AuthModule } from './modules/auth/auth.module';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { PostsModule } from './posts/posts.module';

import { TagsModule } from './modules/tags/tags.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './modules/posts/posts.module';

@Module({
  imports: [
    AuthModule,
    TagsModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
