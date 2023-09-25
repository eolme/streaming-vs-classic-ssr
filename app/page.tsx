import { default as Link } from 'next/link';

export default function HomePage() {
  return (
    <div>
      <Link href="/classic/batch/1000">classic batch 1000</Link>
      <Link href="/streaming/batch/1000/">streaming batch 1000</Link>
      <Link href="/streaming/render-as-you-fetch/1000/">streaming render-as-you-fetch 1000</Link>
    </div>
  );
}
