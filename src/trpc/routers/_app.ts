import { createCallerFactory, createTRPCRouter } from "@/trpc/init";
import { articleRouter } from "./article-router";

// アプリケーション全体のtRPCルーターを作成
export const appRouter = createTRPCRouter({
  article: articleRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
