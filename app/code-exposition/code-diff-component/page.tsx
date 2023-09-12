import { diff } from './code-diff';

export default function Index() {
  const before = `hi`;

  const after = `hello`;

  console.log(diff(before, after));

  return (
    <>
      <h1>Myers&apos; Code Diff</h1>
    </>
  );
}
