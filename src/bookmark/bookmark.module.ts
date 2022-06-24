import { Module } from '@nestjs/common';
import { BookmarkContoller } from './bookmark.controller';
import { BookmarkService } from './bookmarks.service';

@Module({
  controllers: [BookmarkContoller],
  providers: [BookmarkService],
})
export class BookmarkModule {}
