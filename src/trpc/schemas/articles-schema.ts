import * as z from "zod";

export const createArticleSchema = z.object({
  title: z.string({
    error: (issue) =>
      issue.input === undefined ? "必須項目です" : "文字列を入力してください。",
  }),
  content: z.string({
    error: (issue) =>
      issue.input === undefined ? "必須項目です" : "文字列を入力してください。",
  }),
});

export const deleteArticleSchema = z.object({
  id: z.guid({
    error: (issue) =>
      issue.input === undefined ? "必須項目です" : "UUDI形式ではありません。",
  }),
});

export const editArticleSchema = z.object({
  id: z.guid({
    error: (issue) =>
      issue.input === undefined ? "必須項目です" : "UUDI形式ではありません。",
  }),
  title: z.string({
    error: (issue) =>
      issue.input === undefined ? "必須項目です" : "文字列を入力してください。",
  }),
  content: z.string({
    error: (issue) =>
      issue.input === undefined ? "必須項目です" : "文字列を入力してください。",
  }),
});
