import { generateArticle } from '#/shared';

export const runtime = 'edge';

export async function GET(req: Request) {
  const url = new URL(req.url, process.env.NEXT_PUBLIC_HOST);

  return generateArticle(url.searchParams.get('id')!).then((article) => {
    return new Response(JSON.stringify(article), {
      status: 201
    });
  });
}
