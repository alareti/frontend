"use client";

import * as Wiki from "../components/wiki";

export default function Index() {
  return (
    <Wiki.Main
      title={<>Alareti</>}
      subtitle={<>The trove of a dabbler&apos;s fascinations</>}
    >
      <Wiki.Section>
        <Wiki.P>
          Welcome! This space serves as an archive for various experimental
          projects and half-baked ideas of mine. While it may not currently win
          accolades for beauty, I hope that with time and nurturing it will
          blossom into an inviting garden of sorts, captivating to those who
          stumble upon it. As you navigate through, feel free to explore content
          that piques your interest, and kindly overlook any disarray
          encountered along the way. Below you&apos;ll find a listing of various
          pursuits found here, as well as some more information regarding the
          site and myself. Happy exploring!
        </Wiki.P>
      </Wiki.Section>

      <Wiki.Section
        header={{
          heading: <i>Astralys</i>,
          mainPage: { href: "/astralys", name: <i>Astralys</i> },
        }}
      >
        <Wiki.P>
          The pursuit found here is the detailing of a{" "}
          <Wiki.A href={"/astralys/frame-universe"}>frame universe</Wiki.A> set
          in the eponymous galaxy of Astralys. It is an exercise in
          world-building, using AI such as ChatGPT to help with various aspects
          of the design. It shall be a repository of sorts to help in my efforts
          to detail a rich and compelling universe where a wide swathe of
          narratives may flourish.
        </Wiki.P>
      </Wiki.Section>

      <Wiki.Section
        header={{
          heading: <>Game Demos</>,
          mainPage: { href: "/game-demos", name: <>Game Demos</> },
        }}
      >
        <Wiki.P>
          Here you&apos;ll find game demos to help flesh out ideas I&apos;ve
          come up with regarding various graphics and UI/UX tools, especially
          concerned with utilizing the power of the browser. I think with the
          advent of technologies like WebGPU and Progressive Web Apps, there
          will be a renaissance of easy-to-share, access, and play web-based
          games that don&apos;t compromise on performance or fidelity. And as
          such, the content here will be oriented towards such technologies.
        </Wiki.P>
      </Wiki.Section>

      <Wiki.Section
        header={{
          heading: <>Exploring Irony</>,
          mainPage: { href: "/exploring-irony", name: <>Exploring Irony</> },
        }}
      >
        <Wiki.P>
          Here you&apos;ll find an exploration of irony and how it relates to
          logic and human cognition. I believe irony, as a profound human
          experience, is far too neglected as a subject of serious academic
          scholarship, and has even been{" "}
          <Wiki.A
            href={
              "https://en.wikipedia.org/wiki/Irony?useskin=vector#Irony_as_infinite,_absolute_negativity"
            }
          >
            scorned
          </Wiki.A>{" "}
          and{" "}
          <Wiki.A
            href={
              "https://en.wikipedia.org/wiki/Irony?useskin=vector#Opposition_between_perception_and_concept"
            }
          >
            derided
          </Wiki.A>{" "}
          by some of the most famous of modern philosophers. This series of
          articles aims to address this by seriously considering the role irony
          serves in our capacity to understand the world.
        </Wiki.P>
      </Wiki.Section>
      <Wiki.Section
        header={{
          heading: <>Exploring Human Rights</>,
          mainPage: {
            href: "/exploring-human-rights",
            name: <>Exploring Human Rights</>,
          },
        }}
      >
        <Wiki.P>
          Here you&apos;ll find an exploration of the foundations of human
          rights.
        </Wiki.P>
      </Wiki.Section>

      <Wiki.Section header={{ heading: <>Frequently Asked Questions</> }}>
        <Wiki.Section
          header={{ heading: <em>What does &quot;Alareti&quot; mean?</em> }}
        >
          <Wiki.P>
            It means <strong>towards virtue</strong>. It&apos;s a combination of
            a couple of different words from different languages. The first is
            the Spanish word &quot;a,&quot; or &quot;al,&quot; which means
            &quot;to&quot; or &quot;towards&quot;. The second word is the Greek
            word &quot;arete&quot; which means &quot;virtue&quot; or
            &quot;excellence.&quot; When you put them together you get
            &quot;Alarete,&quot; but I wanted to ensure the word would be
            pronounced as al-uh-reh-tay, or something similar, as opposed to
            al-uh-reet. So I changed the last letter from an &apos;e&apos; to an
            &apos;i&apos; to force the pronunciation to be al-uh-reh-tee. In
            essence, it&apos;s a made-up word meaning &quot;towards
            virtue,&quot; which I felt would serve well as both a name and a
            goal of this website.
          </Wiki.P>
        </Wiki.Section>

        <Wiki.Section header={{ heading: <em>Who are you?</em> }}>
          <Wiki.P>
            My name is <strong>Davin</strong>. I&apos;m an electrical engineer
            that tends to dabble in things that interest me. This dabbling
            spirit manifests itself in a variety of ways, but to list a few, it
            tends to oscillate around music, video games, world-building,
            sports, programming, electronics, math, and books. You can contact
            me at my email address below if you&apos;d like to reach out to me.
          </Wiki.P>
          <address className="text-base font-semibold italic">
            <Wiki.A href="mailto:davin.alareti@gmail.com">
              davin.alareti@gmail.com
            </Wiki.A>
          </address>
        </Wiki.Section>
      </Wiki.Section>
    </Wiki.Main>
  );
}
