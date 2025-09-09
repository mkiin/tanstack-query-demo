"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Article } from "@/lib/db/schema";
import { useTRPC } from "@/trpc/client";

export function ArticlesList() {
  const trpc = useTRPC();
  const { data: articles } = useSuspenseQuery(
    trpc.article.getFive.queryOptions(),
  );

  if (articles.length === 0) {
    return (
      <div className="flex w-full flex-col gap-4">
        <p className="text-2xl font-bold text-foreground">No articles</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full gap-4">
      {articles.map((article) => (
        <ArticlesCard key={article.id} article={article} />
      ))}
    </div>
  );
}

type ArticlesCardProps = {
  article: Article;
};

export function ArticlesCard({ article }: ArticlesCardProps) {
  return (
    <Card className="bg-card">
      <CardHeader>{article.title}</CardHeader>
      <CardContent>{article.content}</CardContent>
    </Card>
  );
}
