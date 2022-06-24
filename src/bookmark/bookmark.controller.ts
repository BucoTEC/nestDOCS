import { Controller, Get } from '@nestjs/common';
import { BookmarkService } from './bookmarks.service';

@Controller('bookmarks')
export class BookmarkContoller {
  constructor(private bookmarkService: BookmarkService) {}

  @Get('/')
  allBookmark() {
    return 'all book marks';
  }
}
