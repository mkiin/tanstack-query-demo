"use client";
import { AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ArticleErrorPage({
  error,
  reset,
}: {
  error: Error & { digets?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="flex flex-col items-center text-center">
          <AlertTriangle className="h-12 w-12 text-yellow-500 mb-4" />
          <h2 className="text-xl font-bold text-gray-900">
            データの取得に失敗しました
          </h2>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 mb-4">
            サーバーとの接続に問題が発生しています。
            しばらく時間をおいて再度お試しください。
          </p>
          {reset && (
            <button
              type="button"
              onClick={reset}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              再試行
            </button>
          )}
          {error?.message && (
            <details className="mt-4 text-left">
              <summary className="cursor-pointer text-sm text-gray-500">
                詳細情報
              </summary>
              <pre className="mt-2 p-2 bg-gray-100 rounded text-xs overflow-auto">
                {error.message}
              </pre>
            </details>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
