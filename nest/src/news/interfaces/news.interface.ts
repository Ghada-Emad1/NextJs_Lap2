export interface NewsCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  imageUrl?: string;
}
