import { initTRPC } from "@trpc/server";
import { cache } from "react";
import SuperJSON from "superjson";
import z from "zod";
import { db } from "@/lib/db/client";

// TRPCの各プロシージャで利用するコンテキストの設定
export const createTRPCContext = cache(async (opts: { headers: Headers }) => {
  return {
    db,
    ...opts,
  };
});

// tRPCの初期化
const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: SuperJSON,
  errorFormatter: ({ shape, error }) => ({
    ...shape.data,
    ZodError:
      error.cause instanceof z.ZodError ? z.flattenError(error.cause) : null,
  }),
});

const timingMiddleware = t.middleware(async ({ next, path }) => {
  const start = Date.now();

  if (t._config.isDev) {
    // artificial delay in dev
    const waitMs = Math.floor(Math.random() * 400) + 100;
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }

  const result = await next();

  const end = Date.now();
  console.log(`[TRPC] ${path} took ${end - start}ms to execute`);

  return result;
});

// Routerの作成
export const createTRPCRouter = t.router;

//認証が不要のプロシージャを作成
export const publicProcedure = t.procedure.use(timingMiddleware);

// tRPCルータをサーバーサイドから直接呼び出すファクトリ関数を作成
export const createCallerFactory = t.createCallerFactory;
