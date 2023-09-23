import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Alareti</h1>
      <h2>Introduction</h2>
      <p>
        Welcome to Alareti, home to the proving ground of my various
        experimental projects and half-baked ideas. It is an informal place, as
        evidenced by my first person sentences, and one can expect most content
        found here to have a sort of stream of consciousness spirit attached to
        it. It is not (yet) a very beautiful place, but hopefully with time a
        garden of sorts will spring up from what soil I lay down, and it will be
        agreeable to those who chance to come. In the meantime, I encourage you
        to explore whatever may strike your interest which resides here, and to
        please excuse whatever messiness you may encounter.
      </p>
      <p>
        A large portion of this site is dedicated to the exposition of code, and
        as such, shall need to develop some tools to help with this effort. I
        also plan to create an article which explains the philosophy on the
        centrality of code exposition to learning one&apos;s way around a new
        tool or codebase. The fruits of these efforts to develop my approach to
        code exposition shall be housed in its own category, and is linked below
        in the Table of Contents.
      </p>
      <p>
        Another pursuit to be found here is the detailing of a narrative that
        could be adapted to a video game. It is an exercise in world-building,
        using AI such as ChatGPT to help with various aspects of the design. It
        shall be a repository of sorts to help in my efforts to detail an rich
        and compelling universe where a wide swathe of narratives may flourish.
      </p>
      <h2>Table of Contents</h2>
      <ul>
        <li>
          <Link href="./">Code Exposition</Link>
        </li>
        <li>
          <Link href="./world-building">World Building</Link>
        </li>
      </ul>
    </>
  );
}
