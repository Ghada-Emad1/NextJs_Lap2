import { Module } from '@nestjs/common';
import { NewsController } from './new.controller';
import { NewsService } from './new.service';

@Module({
  controllers: [NewsController],
  providers: [NewsService],
})
export class NewsModule {}