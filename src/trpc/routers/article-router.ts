import { desc, eq } from "drizzle-orm";
import { z } from "zod";
import { articles } from "@/lib/db/schema";
import { createTRPCRouter, publicProcedure } from "@/trpc/init";
import {
  createArticleSchema,
  deleteArticleSchema,
  editArticleSchema,
} from "@/trpc/schemas/articles-schema";

export const articleRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.uuid() }))
    .query(({ ctx, input }) => {
      return ctx.db.select().from(articles).where(eq(articles.id, input.id));
    }),
  getFive: publicProcedure.query(({ ctx }) => {
    return ctx.db
      .select()
      .from(articles)
      .orderBy(desc(articles.createdAt))
      .limit(5);
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.select().from(articles);
  }),

  create: publicProcedure
    .input(createArticleSchema)
    .mutation(({ ctx, input }) => {
      return ctx.db.insert(articles).values(input);
    }),

  delte: publicProcedure
    .input(deleteArticleSchema)
    .mutation(({ ctx, input }) => {
      return ctx.db.delete(articles).where(eq(articles.id, input.id));
    }),

  edit: publicProcedure.input(editArticleSchema).mutation(({ ctx, input }) => {
    return ctx.db.update(articles).set(input).where(eq(articles.id, input.id));
  }),
});
