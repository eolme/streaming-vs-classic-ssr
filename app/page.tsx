import { default as Link } from 'next/link';

export default function HomePage() {
  return (
    <div>
      <Link href="/classic/batch/100/" style={{ display: 'block', padding: 8 }}>classic batch 100</Link>
      <Link href="/streaming/batch/100/" style={{ display: 'block', padding: 8 }}>streaming batch 100</Link>
      <Link href="/streaming/render-as-you-fetch/100/" style={{ display: 'block', padding: 8 }}>streaming render-as-you-fetch 100</Link>
    </div>
  );
}
