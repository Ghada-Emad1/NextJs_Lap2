// src/news/news.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { NewsService } from './new.service';
import { NewsCategory, NewsArticle } from './interfaces/news.interface';

@Controller('categories')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  getAllCategories(): NewsCategory[] {
    return this.newsService.getAllCategories();
  }

  @Get(':slug')
  getCategoryBySlug(@Param('slug') slug: string): {
    category: NewsCategory;
    articles: NewsArticle[];
  } {
    return this.newsService.getCategoryBySlug(slug);
  }
}
