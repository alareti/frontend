"use client";

import * as Wiki from "../../components/wiki";

export default function Index() {
  return (
    <Wiki.Main title={<i>Astralys</i>}>
      <Wiki.Section>
        <Wiki.P>
          The main focus here is to build out the lore of{" "}
          <strong>
            <i>Astralys</i>
          </strong>
          . It is a fictional universe set in a distant galaxy awash with the
          cosmic might of the <strong>Astral Tide</strong>, once seamlessly
          harnessed by the enigmatic <strong>Forerunners</strong>. But disaster
          struck, and the <strong>Great Astral Shift</strong> ushered in
          tumultuous changes, toppling the Forerunners&apos; reign and reshaping
          the galaxy&apos;s tapestry. New species introduced through the
          shift—from the fiery Pyronians to the enduring Dendrans—staked their
          claims, each infused with distinct aspirations and cultural hues. This
          shift spawned regions riddled with potent{" "}
          <strong>Astral Anomalies</strong> and technologically-saturated{" "}
          <strong>Astral Voids</strong>, causing the very fabric of reality to
          twist and turn as the Astral landscape of the galaxy shifts. Amidst
          this dynamic canvas, elusive <strong>Tidebinders</strong> wield the
          Astral Tide&apos;s essence, myriad factions hustle to unravel the
          secrets of ancient <strong>Forerunner Artifacts</strong>, and
          sprawling empires grapple for dominion and influence. Every denizen of
          Astralys, whether ancient or newly introduced, wrestles with their
          lineage and destiny in a galaxy brimming with enigma and tension.
        </Wiki.P>
        <Wiki.P>
          <i>Astralys</i> is being crafted as a <strong>frame universe</strong>.
          This approach to world-building seeks to meld the boundless
          possibilities of a <strong>multiverse</strong> with the continuity and
          stability inherent in a <strong>singular universe</strong>. When
          brought to fruition, a frame universe permits a broad spectrum of
          settings and themes to seamlessly interconnect and simultaneously
          unify the universe&apos;s historical narrative. This is a universe
          where vastly diverse stories converge to enrich a broader tapestry
          while simultaneously feeling intricately linked and logically
          consistent. It is a universe where versatility aligns with
          significance, structural logic bolsters creative freedom, and
          familiarity sparks intrigue. While the concept is ambitious, the
          potential rewards are boundless.
        </Wiki.P>
      </Wiki.Section>

      <Wiki.Section header={{ heading: <>Further Links</> }}>
        <ul>
          <li>
            <Wiki.A href={"/astralys/overviews"}>Overviews</Wiki.A>
          </li>
          <li>
            <Wiki.A href={"/astralys/frame-universe"}>Frame Universe</Wiki.A>
          </li>
          <li>
            <Wiki.A href={"/astralys/astral-tide"}>Astral Tide</Wiki.A>
          </li>
          <li>
            <Wiki.A href={"/astralys/symphonae"}>The Symphonae</Wiki.A>
          </li>
          <li>
            <Wiki.A href={"/astralys/dendrans"}>The Dendrans</Wiki.A>
          </li>
          <li>
            <Wiki.A href={"/astralys/aquarids"}>The Aquarids</Wiki.A>
          </li>
          <li>
            <Wiki.A href={"/astralys/pyronians"}>The Pyronians</Wiki.A>
          </li>
          <li>
            <Wiki.A href={"/astralys/moivari"}>The Moivari</Wiki.A>
          </li>
          <li>
            <Wiki.A href={"/astralys/choreans"}>The Choreans</Wiki.A>
          </li>
          <li>
            <Wiki.A href={"/astralys/virelians"}>The Virelians</Wiki.A>
          </li>
          <li>
            <Wiki.A href={"/astralys/galactic-basin-coalition"}>
              The Galactic Basin Coalition
            </Wiki.A>
          </li>
        </ul>
      </Wiki.Section>
    </Wiki.Main>
  );
}
