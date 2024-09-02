import { Injectable, Body } from '@nestjs/common';

@Injectable()
export class TagsService {
  tags = [
    {
      id: 1,
      name: 'post',
    },
    {
      id: 2,
      name: 'post',
    },
    {
      id: 3,
      name: 'post',
    },
    {
      id: 4,
      name: 'post',
    },
  ];

  getAllTags() {
    return this.tags;
  }

  deletetage(id) {
    let tag = this.tags.find((tag) => tag.id == id);
    if (tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
      return { message: 'deleted' };
    }
  }

  getOneTage(id) {
    let tag = this.tags.find((tag) => tag.id == id);
    if (tag) return tag;
    return 'Not found';
  }

  updateTage(body) {
    let tag = this.tags.find((tag) => tag.id == body.id);
    if (tag) {
      tag.name = body.name;

      return this.tags;
    } else {
      return { message: 'Not found' };
    }
  }
  addTage(body) {
    body.id = this.tags[this.tags.length - 1].id + 1;

    this.tags.push(body);
    return this.tags;
  }
}
