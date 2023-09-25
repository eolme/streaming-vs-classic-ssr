'use server';

import { Article, generateId } from '#/shared';

export async function AsyncArticle() {
  const article = await (await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/article/?id=${generateId()}`, {
    cache: 'no-store'
  })).json();

  return (
    <Article
      article={article}
    />
  );
}
