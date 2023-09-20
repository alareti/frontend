import Link from "next/link";

export default function Index() {
  return (
    <>
      <h1>World Building</h1>
      <p>
        The main focus here is to build out the lore of <i>Astralys</i>, the
        far-away galaxy where the cosmic force known as the Astral Tide, once
        harmoniously wielded by the ancient Forerunners, now flows chaotically
        after the cataclysmic Great Astral Shift. This event disrupted the
        Tide&apos;s balance, introduced new species, and birthed regions of
        potent anomalies, tech-dominated voids, and fluctuating astral zones.
        Amidst this intricate landscape, rare Tidebinders harness the
        Tide&apos;s power, factions seek to unlock the secrets of ancient
        Technotide Artifacts, and empires clash for galactic dominance, all
        striving to shape their destinies in a galaxy rich in mystery and
        conflict.
      </p>
      <h2>Table of Contents</h2>
      <ul>
        <li>
          <Link href={"/world-building/astral-tide"}>Astral Tide</Link>
        </li>
        <li>
          <Link href={"/world-building/symphonae"}>The Symphonae</Link>
        </li>
        <li>
          <Link href={"/world-building/dendran"}>The Dendrans</Link>
        </li>
        <li>
          <Link href={"/world-building/aquarid"}>The Aquarids</Link>
        </li>
      </ul>
    </>
  );
}
