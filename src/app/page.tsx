import Link from "next/link";

export default function Home() {
  return (
    <>
      <article className="mx-10 my-6">
        <hgroup className="my-4">
          <h1 className="font-serif text-5xl font-medium">Alareti</h1>
          <p className="mt-2 text-gray-400">
            The trove of a dabbler&apos;s fascinations
          </p>
          <hr className="mt-1 w-1/12" />
        </hgroup>
        <p className="my-2">
          Welcome! This space serves as the archive for various experimental
          projects and half-baked ideas of mine. While it may not currently win
          accolades for beauty, I hope that with time and nurturing it will
          blossom into an inviting garden of sorts, captivating to those who
          stumble upon it. As you navigate through, feel free to explore content
          that piques your interest, and kindly overlook any disarray
          encountered along the way. Below you&apos;ll find a listing of various
          pursuits found here, as well as some more information regarding the
          site and myself. Happy exploring!
        </p>
        {/* <p className="my-2">
          A large portion of this site is dedicated to the exposition of code,
          and as such, shall need to develop some tools to help with this
          effort. I also plan to create an article which explains the philosophy
          on the centrality of code exposition to learning one&apos;s way around
          a new tool or codebase. The fruits of these efforts to develop my
          approach to code exposition shall be housed in its own category, and
          is linked below in the Table of Contents.
        </p> */}

        <h2 className="my-6 text-2xl font-bold">
          <i>Astralys</i>
        </h2>
        <p className="my-2">
          A pursuit found here is the detailing of a &quot;
          <Link href={"/astralys/frame-universe"} className="text-sky-600">
            frame universe
          </Link>
          &quot; entitled{" "}
          <Link href={"/astralys"} className="text-sky-600">
            <i>Astralys</i>
          </Link>
          . It is an exercise in world-building, using AI such as ChatGPT to
          help with various aspects of the design. It shall be a repository of
          sorts to help in my efforts to detail an rich and compelling universe
          where a wide swathe of narratives may flourish.
        </p>

        <h2 className="my-6 text-2xl font-bold">Game Design Demos</h2>
        <p className="my-2">
          There will also be{" "}
          <Link href={"/game-demos"} className="text-sky-600">
            game demos
          </Link>{" "}
          here to help flesh out various ideas I have with trying to create
          various graphics and UI/UX tools, especially with regards to games
          utilizing the power of the browser. I think with the advent of
          technologies like WebGPU and Progressive Web Apps, there will be a
          renaissance of easy-to-share, access, and play web-based games that
          don&apos;t compromise on performance or fidelity. And as such, the
          content here will be oriented towards such technologies.
        </p>

        <h2 className="my-6 text-2xl font-bold">Frequently Asked Questions</h2>
        <ul className="my-6">
          <li className="my-6">
            <h3 className="my-2 text-xl">
              <i>What does &quot;Alareti&quot; even mean?</i>
            </h3>
            <p>
              <strong>Towards virtue</strong>. It&apos;s a combination of a
              couple of different words from different languages. The first is
              the Spanish word &quot;a,&quot; or &quot;al,&quot; which means
              &quot;to&quot; or &quot;towards&quot;. The second word is the
              Greek word &quot;arete&quot; which means &quot;virtue&quot; or
              &quot;excellence.&quot; When you put them together you get
              &quot;Alarete,&quot; but I wanted to ensure the word would be
              pronounced as al-uh-reh-tay, or something similar, as opposed to
              al-uh-reet. So I changed the last letter from an &apos;e&apos; to
              an &apos;i&apos; to force the pronunciation to be al-uh-reh-tee.
              In essence, it&apos;s a made-up word meaning &quot;towards
              virtue,&quot; which I felt would serve well as both a name and a
              goal of this website.
            </p>
          </li>
          <li className="my-6">
            <h3 className="my-2 text-xl">
              <i>Who are you?</i>
            </h3>
            <p>
              My name is <strong>Davin</strong>. I&apos;m an electrical engineer
              that tends to dabble in things that interests me. This dabbling
              spirit manifests itself in a variety of ways, but to list a few,
              it tends to oscillate around music, video games, world-building,
              sports, programming, electronics, math, and books. If you wish to
              contact me, davin.alareti@gmail.com is my email address.
            </p>
          </li>
        </ul>
      </article>
    </>
  );
}
