import type { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import type { ArticleModel } from '#/shared';

import { Article, generateId } from '#/shared';

export const getServerSideProps = (async (context: GetServerSidePropsContext) => {
  const params = Object.assign({
    count: '1'
  }, context.params);

  const count = Number.parseInt(params.count, 10);

  const articles = await Promise.all(Array.from({
    length: count
  }, async () => (await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/article/?id=${generateId()}`, {
    cache: 'no-store'
  })).json()));

  return {
    props: {
      articles
    }
  };
}) satisfies GetServerSideProps<{
  articles: ArticleModel[];
}>;

export default function BatchPage({
  articles
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      {articles.map((article) => (
        <Article
          key={article.id}
          article={article}
        />
      ))}
    </main>
  );
}
