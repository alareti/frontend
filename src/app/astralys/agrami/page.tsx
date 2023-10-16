"use client";

import * as Wiki from "@/src/components/wiki";
import Link from "next/link";

export default function Index() {
  return (
    <Wiki.Main
      title={<>Agrami</>}
      subtitle={<>Agrarian planet of the Galactic Basin</>}
    >
      <Wiki.Section>
        <Wiki.P>
          Agrami is an agrarian world located in the{" "}
          <Wiki.A href={"/astralys/galactic-basin-midland"}>Midland</Wiki.A>{" "}
          region of the{" "}
          <Wiki.A href={"/astralys/galactic-basin"}>Galactic Basin</Wiki.A>. The{" "}
          <Wiki.A href={"/astralys/astral-tide"}>Astral Tide</Wiki.A> causes
          plants that grow here to provide nutritional value in accordance to
          the need of the person who harvests it. A plant picked by an emaciated
          person would thus be far more nutritional than if picked by a satiated
          person. <Wiki.A href={"/astralys/humans"}>Humans</Wiki.A> and{" "}
          <Wiki.A href={"/astralys/dendrans"}>dendrans</Wiki.A> are the primary
          species who inhabit Agrami - humans valuing the land mainly for its
          commercial value, and the Dendrans valuing it primarily as a place to
          live. Agrami serves as a breadbasket to the cluster of star systems
          known as the{" "}
          <Wiki.A href={"/astralys/renout-formation"}>Renout Formation</Wiki.A>,
          located on the{" "}
          <Wiki.A href={"/astralys/terr-astral-artery"}>
            Terr Astral Artery
          </Wiki.A>
          .
        </Wiki.P>
        <Wiki.P>
          There are no metropolises on Agrami. The largest urban area is{" "}
          <Wiki.A href={"/astralys/landau"}>Landau</Wiki.A>, the capital city of
          Agrami, which holds approximately 500,000 people. It primarily serves
          as the main transportation hub which connects the rest of the galaxy
          to the farmlands dotting the landscape. There are other major urban
          areas on Agrami, each serving as a node for transportation, trade, and
          production, like <Wiki.A href={"/astralys/serin"}>Serin</Wiki.A>,{" "}
          <Wiki.A href={"/astralys/farein"}>Farein</Wiki.A>, and{" "}
          <Wiki.A href={"/astralys/traye"}>Traye</Wiki.A>. However, their
          populations hover closer to 100,000, and they serve as regional
          capitals as opposed to the planetary capital of Landau.
        </Wiki.P>
      </Wiki.Section>
      <Wiki.Section header={{ heading: <>Effects of the Astral Tide</> }}>
        <Wiki.P>
          The main effect of the Astral Tide on Agrami is that plants provide
          nutritional value in accordance to the need of the creature that
          harvests it. Not all areas of Agrami are conducive to agriculture, but
          there are large temperate zones where the ground is fertile and water
          is plentiful. This is where human civilization thrives - the rest of
          the planet is left in its natural state.
        </Wiki.P>
        <Wiki.P>
          Many observations of this simple phenomena are worth mentioning. An
          emaciated person will make for a far better farmer than a satiated
          person. As such, some groups fast before the harvest, other groups
          purposefully exploit the needy in order to maximize their gains, and
          others simply ignore the desire for profit and prefer to live off the
          land. Unfortunate offworlders who come looking for freedom oftentimes
          find themselves working for unscrupulous businessmen, exploited simply
          because of their misery.
        </Wiki.P>
        <Wiki.P>
          Given that the farmers are weakest when their bounty is most valuable,
          banditry is a familiar problem of the land. Farmers need to balance
          the need to protect their property and livelihood with the desire to
          generate a profit, and as such, communities form where some men are
          trained as warriors to protect the harvest, and most are trained to
          work the land. There are only a few major cities, and only Landau has
          a military and police force sufficient to properly protect the workers
          around its land from theft and violence. The further one moves away
          from Landau and the other major cities, the more vulnerable one is to
          banditry.
        </Wiki.P>
      </Wiki.Section>
      <Wiki.Section header={{ heading: <>Geography and Terrain</> }}>
        <Wiki.P>The geography of Agrami is </Wiki.P>
      </Wiki.Section>
      <Wiki.Section header={{ heading: <>Major Species</> }}>
        <Wiki.Section header={{ heading: <>Humans</> }}>
          <Wiki.P>
            Humans make up the majority of the population, centralized around
            the fertile regions of Agrami.
          </Wiki.P>
        </Wiki.Section>
        <Wiki.Section
          header={{
            heading: <>Dendrans</>,
            mainPage: {
              href: "/astralys/dendrans",
              name: <>Dendrans</>,
            },
          }}
        >
          <Wiki.P>
            There is a sizable dendran population in Agrami as well. They prefer
            to inhabit the untamed forested regions near the edges of the
            temperate zones of Agrami. They are not nearly as populous as humans
            on Agrami and hold themselves rather aloof from their neighbors,
            preferring to keep to themselves as opposed to involving themselves
            with their affairs.
          </Wiki.P>
        </Wiki.Section>
      </Wiki.Section>
    </Wiki.Main>
  );
}
