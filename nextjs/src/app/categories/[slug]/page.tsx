import { notFound, redirect } from "next/navigation";
import { getCategoryBySlug } from "../../lib/api";
import { NewsCategory, NewsArticle } from "../../types/news";
import Link from "next/link";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

// This page will be generated at request time
export const dynamic = "force-dynamic";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;

  // Handle redirect from climate to weather
  if (slug === "climate") {
    redirect("/categories/weather");
  }

  const categoryData = await getCategoryBySlug(slug);

  if (!categoryData) {
    notFound();
  }

  const { category, articles } = categoryData;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>›</span>
            <a href="/categories" className="hover:text-primary-600">
              Categories
            </a>
            <span>›</span>
            <span className="text-gray-900">{category.name}</span>
          </nav>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {category.name}
            </h1>
            <p className="text-xl text-gray-600">{category.description}</p>
          </div>
        </div>

        {/* Articles */}
        {articles && articles.length > 0 ? (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No Articles Available
            </h3>
            <p className="text-gray-600">
              There are currently no articles in this category. Check back later
              for updates.
            </p>
          </div>
        )}

        {/* Back to Categories */}
        <div className="mt-12 text-center">
          <a
            href="/categories"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to All Categories
          </a>
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ article }: { article: NewsArticle }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {article.imageUrl && (
        <div className="h-48 bg-gray-200 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white opacity-60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{article.content}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>By {article.author}</span>
          <time dateTime={article.publishedAt}>
            {formatDate(article.publishedAt)}
          </time>
        </div>
      </div>
    </article>
  );
}
