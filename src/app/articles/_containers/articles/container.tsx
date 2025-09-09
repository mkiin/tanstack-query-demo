import { Suspense } from "react";
import { HydrateClient, prefetch, trpc } from "@/trpc/server";
import { ArticlesList } from "./presentation";

export async function ArticlesContainer() {
  prefetch(trpc.article.getFive.queryOptions()); // 投稿記事をサーバーから取得してクエリキャッシュをする
  return (
    <HydrateClient>
      <Suspense fallback={<p>Loading</p>}>
        <ArticlesList />
      </Suspense>
    </HydrateClient>
  );
}
