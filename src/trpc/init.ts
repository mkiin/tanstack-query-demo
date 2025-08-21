import { initTRPC } from "@trpc/server";
import SuperJSON from "superjson";
import z, { type ZodError } from "zod";
import { db } from "@/lib/db/client";

// TRPCの各プロシージャで利用するコンテキストの設定
export const createTRPCContext = async (opts: { headers: Headers }) => {
  return {
    db,
    ...opts,
  };
};

// tRPCの初期化
const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: SuperJSON,
  errorFormatter: ({ shape, error }) => ({
    ...shape.data,
    ZodError: error.cause
      ? z.flattenError(error.cause as ZodError<Record<string, unknown>>)
      : null,
  }),
});

// Routerの作成
export const createTRPCRouter = t.router;

//認証が不要のプロシージャを作成
export const publicProcedure = t.procedure.use(({ next }) => {
  return next();
});

// tRPCルータをサーバーサイドから直接呼び出すファクトリ関数を作成
export const createCallerFactory = t.createCallerFactory;
