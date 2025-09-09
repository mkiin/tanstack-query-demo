import { ArticlesContainer } from "./_containers/articles/container";

export default function ArticlesPage() {
  return (
    <div className="min-h-screen max-w-full bg-gray-50 py-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">記事一覧</h1>
        </div>
        <ArticlesContainer />
      </div>
    </div>
  );
}
