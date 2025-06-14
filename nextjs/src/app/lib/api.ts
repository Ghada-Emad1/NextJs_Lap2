// src/lib/api.ts
import { NewsCategory, NewsArticle } from "@/app/types/news";

const API_BASE_URL = "http://localhost:3001";

export async function getCategories(): Promise<NewsCategory[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function getCategoryBySlug(
  slug: string
): Promise<{ category: NewsCategory; articles: NewsArticle[] } | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/categories/${slug}`, {
      cache: "no-store", // Always fetch fresh data
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error("Failed to fetch category");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching category:", error);
    return null;
  }
}
