import Link from "next/link";

export default function Index() {
  return (
    <>
      <h1>Astralys</h1>
      <p>
        The main focus here is to build out the lore of <i>Astralys</i>.{" "}
        <i>Astralys</i> a fictional universe set in a distant galaxy awash with
        the cosmic might of the Astral Tide, once seamlessly harnessed by the
        enigmatic Forerunners. But disaster struck, and the Great Astral Shift
        ushered in tumultuous changes, toppling the Forerunners&apos; reign and
        reshaping the galaxy&apos;s tapestry. New species—from the fiery
        Pyronians to the enduring Dendrans—staked their claims, each infused
        with distinct aspirations and cultural hues. This shift spawned regions
        riddled with potent anomalies, technologically-saturated voids, and
        mercurial astral zones. Amidst this dynamic canvas, elusive Tidebinders
        wield the Astral Tide&apos;s essence, myriad factions hustle to unravel
        the secrets of ancient Technotide Artifacts, and sprawling empires
        grapple for dominion. Every denizen of Astralys, whether ancient or
        newly introduced, wrestles with their lineage and destiny in a galaxy
        brimming with enigma and tension.
      </p>
      <p>
        <i>Astralys</i> is being crafted as a &quot;frame universe.&quot; This
        approach to world-building seeks to meld the boundless possibilities of
        a multiverse with the continuity and stability inherent in a singular
        universe. When brought to fruition, a frame universe permits a broad
        spectrum of settings and themes to seamlessly interconnect and
        simultaneously unify the universe&apos;s historical narrative. This is a
        universe where vastly diverse stories converge to enrich a broader
        tapestry while simultaneously feeling intricately linked and logically
        consistent. It is a universe where versatility aligns with significance,
        structural logic bolsters creative freedom, and familiarity sparks
        intrigue. While the concept is ambitious, the potential rewards are
        boundless.
      </p>
      <h2>Table of Contents</h2>
      <ul>
        <li>
          <Link href={"/astralys/overviews"}>Overviews</Link>
        </li>
        <li>
          <Link href={"/astralys/frame-universe"}>Frame Universe</Link>
        </li>
        <li>
          <Link href={"/astralys/astral-tide"}>Astral Tide</Link>
        </li>
        <li>
          <Link href={"/astralys/symphonae"}>The Symphonae</Link>
        </li>
        <li>
          <Link href={"/astralys/dendrans"}>The Dendrans</Link>
        </li>
        <li>
          <Link href={"/astralys/aquarids"}>The Aquarids</Link>
        </li>
        <li>
          <Link href={"/astralys/pyronians"}>The Pyronians</Link>
        </li>
        <li>
          <Link href={"/astralys/moivari"}>The Moivari</Link>
        </li>
        <li>
          <Link href={"/astralys/choreans"}>The Choreans</Link>
        </li>
        <li>
          <Link href={"/astralys/virelians"}>The Virelians</Link>
        </li>
        <li>
          <Link href={"/astralys/galactic-unity-assembly"}>
            The Galactic Unity Assembly
          </Link>
        </li>
      </ul>
    </>
  );
}
