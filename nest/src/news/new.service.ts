// src/news/news.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { NewsCategory, NewsArticle } from './interfaces/news.interface';

@Injectable()
export class NewsService {
  private readonly categories: NewsCategory[] = [
    {
      id: '1',
      slug: 'local',
      name: 'Local News',
      description: 'News from your local community',
    },
    {
      id: '2',
      slug: 'national',
      name: 'National News',
      description: 'News from across the nation',
    },
    {
      id: '3',
      slug: 'international',
      name: 'International News',
      description: 'News from around the world',
    },
    {
      id: '4',
      slug: 'business',
      name: 'Business News',
      description: 'Financial and business updates',
    },
    {
      id: '5',
      slug: 'sports',
      name: 'Sports News',
      description: 'Latest sports updates and scores',
    },
    {
      id: '6',
      slug: 'weather',
      name: 'Weather News',
      description: 'Weather forecasts and climate updates',
    },
    {
      id: '7',
      slug: 'entertainment',
      name: 'Entertainment News',
      description: 'Celebrity news and entertainment updates',
    },
  ];

  private readonly articles: NewsArticle[] = [
    {
      id: '1',
      title: 'Local Community Center Opens New Facility',
      content:
        'The downtown community center has unveiled its new state-of-the-art facility...',
      author: 'Jane Smith',
      publishedAt: '2024-06-01T10:00:00Z',
      category: 'local',
      imageUrl: 'https://example.com/local-news-1.jpg',
    },
    {
      id: '2',
      title: 'New Economic Policy Announced',
      content:
        'The government has announced a new economic policy that aims to boost growth...',
      author: 'John Doe',
      publishedAt: '2024-06-02T14:30:00Z',
      category: 'national',
    },
    {
      id: '3',
      title: 'International Trade Summit Concludes',
      content:
        'World leaders have concluded the annual international trade summit...',
      author: 'Maria Garcia',
      publishedAt: '2024-06-03T09:15:00Z',
      category: 'international',
    },
    {
      id: '4',
      title: 'Tech Stocks Rise Amid Market Optimism',
      content:
        'Technology stocks saw significant gains today as investors remain optimistic...',
      author: 'David Wilson',
      publishedAt: '2024-06-04T16:45:00Z',
      category: 'business',
    },
    {
      id: '5',
      title: 'Championship Finals This Weekend',
      content:
        'The highly anticipated championship finals are set to take place this weekend...',
      author: 'Sarah Johnson',
      publishedAt: '2024-06-05T11:20:00Z',
      category: 'sports',
    },
    {
      id: '6',
      title: 'Severe Weather Warning Issued',
      content:
        'Meteorologists have issued a severe weather warning for the upcoming week...',
      author: 'Mike Brown',
      publishedAt: '2024-06-06T08:00:00Z',
      category: 'weather',
    },
    {
      id: '7',
      title: 'New Movie Breaks Box Office Records',
      content:
        'The latest blockbuster has shattered opening weekend box office records...',
      author: 'Lisa Davis',
      publishedAt: '2024-06-07T13:30:00Z',
      category: 'entertainment',
    },
  ];

  getAllCategories(): NewsCategory[] {
    return this.categories;
  }

  getCategoryBySlug(slug: string): {
    category: NewsCategory;
    articles: NewsArticle[];
  } {
    const category = this.categories.find((cat) => cat.slug === slug);

    if (!category) {
      throw new NotFoundException(`Category with slug '${slug}' not found`);
    }

    const articles = this.articles.filter(
      (article) => article.category === slug,
    );

    return {
      category,
      articles,
    };
  }
}
