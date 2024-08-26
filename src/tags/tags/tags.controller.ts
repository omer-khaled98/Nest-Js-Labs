import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsDot } from 'src/dto/tags.dto';

@Controller('tags')
export class TagsController {
  constructor(private _tagsService: TagsService) {}

  @Get(':id')
  getTag(@Param('id') id: any) {
    return this._tagsService.getOneTage(id);
  }
  @Delete(':id')
  deleteTage(@Param('id') id: any) {
    return this._tagsService.deletetage(id);
  }
  @Get()
  getAll() {
    return this._tagsService.getAllTags();
  }

  @Patch()
  uptateTage(@Body() body: TagsDot) {
    return this._tagsService.updateTage(body);
  }
  @Post()
  addTage(@Body(new ValidationPipe()) body: TagsDot) {
    return this._tagsService.addTage(body);
  }
}
