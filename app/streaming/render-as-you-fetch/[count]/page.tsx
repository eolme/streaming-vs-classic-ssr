'use server';

import { Suspense } from 'react';
import { AsyncArticle } from './async-article';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function StreamingRenderAsYouFetchPage({
  params
}: { params: { count: string }}) {
  const count = Number.parseInt(params.count, 10);

  const articles = Array.from({
    length: count
  }, (_, index) => (
    <Suspense
      key={index}
      fallback={(
        <div>loading article:{index}</div>
      )}
    >
      <AsyncArticle />
    </Suspense>
  ));

  return (
    <main>
      {articles}
    </main>
  );
}
