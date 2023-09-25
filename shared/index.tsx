import { LoremIpsum } from 'lorem-ipsum';

export type ArticleModel = {
  id: string;
  title: string;
  content: string;
};

export function Article({
  article
}: { article: ArticleModel }) {
  return (
    <article data-id={article.id}>
      <h4>{article.title}</h4>
      {article.content}
      <div>
        <button>like</button>
      </div>
    </article>
  );
}

const generateHash = () => Math.random().toString(32).slice(2);

export const generateId = () => `article-${Date.now().toString(32)}-${generateHash()}-${generateHash()}-${generateHash()}`;

export async function generateArticle(id: string) {
  return new Promise<ArticleModel>((resolve) => {
    const ipsum = new LoremIpsum({
      seed: id
    });

    // Some latency
    setTimeout(() => {
      resolve({
        id,
        title: ipsum.generateWords(10),
        content: ipsum.generateParagraphs(10)
      });
    }, Math.max(1000 * Math.random(), 200));
  });
}
