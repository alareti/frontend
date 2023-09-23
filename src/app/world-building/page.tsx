import Link from "next/link";

export default function Index() {
  return (
    <>
      <h1>World Building</h1>
      <p>
        The main focus here is to build out the lore of <i>Astralys</i>, a
        distant galaxy awash with the cosmic might of the Astral Tide, once
        seamlessly harnessed by the enigmatic Forerunners. But disaster struck,
        and the Great Astral Shift ushered in tumultuous changes, toppling the
        Forerunners&apos; reign and reshaping the galaxy&apos;s tapestry. New
        species—from the fiery Pyronians to the enduring Dendranss—staked their
        claims, each infused with distinct aspirations and cultural hues. This
        shift spawned regions riddled with potent anomalies,
        technologically-saturated voids, and mercurial astral zones. Amidst this
        dynamic canvas, elusive Tidebinders wield the Astral Tide&apos;s
        essence, myriad factions hustle to unravel the secrets of ancient
        Technotide Artifacts, and sprawling empires grapple for dominion. Every
        denizen of Astralys, whether ancient or newly introduced, wrestles with
        their lineage and destiny in a galaxy brimming with enigma and tension.
      </p>
      <h2>Table of Contents</h2>
      <ul>
        <li>
          <Link href={"/world-building/overviews"}>Overviews</Link>
        </li>
        <li>
          <Link href={"/world-building/astral-tide"}>Astral Tide</Link>
        </li>
        <li>
          <Link href={"/world-building/symphonae"}>The Symphonae</Link>
        </li>
        <li>
          <Link href={"/world-building/dendrans"}>The Dendrans</Link>
        </li>
        <li>
          <Link href={"/world-building/aquarids"}>The Aquarids</Link>
        </li>
        <li>
          <Link href={"/world-building/pyronians"}>The Pyronians</Link>
        </li>
        <li>
          <Link href={"/world-building/moivari"}>The Moivari</Link>
        </li>
        <li>
          <Link href={"/world-building/choreans"}>The Choreans</Link>
        </li>
        <li>
          <Link href={"/world-building/virelians"}>The Virelians</Link>
        </li>
      </ul>
    </>
  );
}
