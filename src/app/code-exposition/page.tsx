import Link from 'next/link';

export default function Index() {
  return (
    <>
      <ul>
        <li>
          <Link href={'/code-exposition/code-diff-component'}>
            Code Diff Component
          </Link>
        </li>
      </ul>
    </>
  );
}
