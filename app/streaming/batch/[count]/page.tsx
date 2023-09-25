'use server';

import { Article, generateId } from '#/shared';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function StreamingBatchPage({
  params
}: { params: { count: string }}) {
  const count = Number.parseInt(params.count, 10);

  const articles = await Promise.all(Array.from({
    length: count
  }, async () => (await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/article/?id=${generateId()}`, {
    cache: 'no-store'
  })).json()));

  return (
    <main>
      {articles.map((article, index) => (
        <Article
          key={index}
          article={article}
        />
      ))}
    </main>
  );
}
