"use client";

import * as Wiki from "@/src/components/wiki";

export default function Index() {
  return (
    <Wiki.Main
      title={<>Galactic Basin Coalition</>}
      subtitle={<>The governing body of the Galactic Basin Territories</>}
    >
      <Wiki.Section
        header={{
          heading: <>Governance and Political Institutions</>,
        }}
      >
        <Wiki.Section header={{ heading: <>Nature of Governance</> }}>
          <Wiki.P>
            The Galactic Basin Coalition (GBC) envisions itself as a harmonious
            convergence of diverse species and cultures within Astralys. It
            upholds the principles of unity in diversity, fostering cooperation
            and mutual respect among its constituents. The GBC is dedicated to
            seamlessly integrating technology with the Astral Tide, aiming to
            unlock unparalleled prosperity and advancement for society. With a
            governance structure that is inherently decentralized, it ensures
            that every member species has a voice, promoting policies that are
            inclusive and representative. The Coalition is steadfast in its
            commitment to maintaining peace, stability, and sustainability,
            actively working to conserve both the rich biodiversity and the
            invaluable cultural heritage within its jurisdiction. Ethical
            considerations, fairness, and justice are at the forefront of its
            governance philosophy, with each decision meticulously weighed to
            balance the needs and rights of all members. Furthermore, the GBC is
            a staunch supporter of innovation and exploration, consistently
            investing in the pursuit of knowledge and the exploration of the
            mysterious expanse of Astralys.
          </Wiki.P>
          <Wiki.P>
            In practice, the GBC&apos;s governance is a complex, multifaceted
            endeavor. While it strives for a harmonious blend of technology and
            the Astral Tide, this synergy often sparks controversies and
            presents significant challenges, necessitating a careful balancing
            act between progress and preservation. The decentralized nature of
            its governance, although inclusive, occasionally succumbs to
            bureaucratic hurdles and inefficiency, with the multitude of voices
            sometimes leading to short-sighted or compromised policies. The
            Coalition&apos;s dedication to peace and stability is tested by the
            myriad conflicts and disputes it must navigate, with resolutions
            often being delicate compromises that may leave some parties
            discontented. The commitment to sustainability and preservation
            sometimes clashes with the imperative for innovation and
            exploration, resulting in dilemmas and trade-offs that mirror the
            vast complexity of the galaxy itself. In its quest for ethical and
            fair governance, the GBC often grapples with the nuances of
            realpolitik, making decisions that, while generally fair, are not
            immune to controversy and debate. The GBC, in reality, is a dynamic
            entity, neither utopian nor dystopian, continually striving to weave
            a tapestry of shared identity and community amidst the challenges
            and opportunities presented by the infinite canvas of Astralys.
          </Wiki.P>
        </Wiki.Section>
        <Wiki.Section header={{ heading: <>Decision-Making Process</> }}>
          <Wiki.P>
            The GBC operates through a decentralized decision-making structure,
            intricately balancing powers between the federal government, known
            as the Central Assembly, and the governments of its constituent
            provinces within the Galactic Basin, known as provincial assemblies.
            These provincial assemblies have broad discretion to govern their
            respective territories, but must collaborate through the Central
            Assembly to make inter-provincial decisions.
          </Wiki.P>
          <Wiki.Section header={{ heading: <>Central Assembly</> }}>
            <ul className="ml-8">
              <li>
                <strong>Jurisdiction</strong>: The Central Assembly oversees
                matters of galactic significance, crafting broad economic
                policies, regulating inter-provincial trade, and managing
                defense and diplomatic relations. It also coordinates
                galaxy-wide responses to crises and facilitates technological
                and scientific research.
              </li>
              <li>
                <strong>Location</strong>: Situated in the Heartland, the
                Central Assembly is embedded within, yet distinct from, the
                provincial assemblies of these technologically advanced areas.
              </li>
              <li>
                <strong>Authority</strong>: While it holds significant
                influence, the Central Assembly&apos;s authority is
                counterbalanced by the strategic importance and autonomy of the
                Midlands and Frontier Regions.
              </li>
            </ul>
          </Wiki.Section>
          <Wiki.Section header={{ heading: <>Heartland Regions</> }}>
            <ul className="ml-8">
              <li>
                <strong>Characteristics</strong>: The Heartland is the
                technological and industrial epicenter of the Galactic Basin,
                housing the capital planet of the GBC. Its name is Federis, and
                it is the only planet in the Basin not technically part of any
                GBC province. It instead is part of a tiny area called the
                Canton of Federis.
              </li>
              <li>
                <strong>Governance</strong>: Provinces within the Heartland have
                their own provincial assemblies, which often align with the
                Central Assembly but maintain distinct identities and governance
                structures.
              </li>
              <li>
                <strong>Decision-Making</strong>: Representatives from the
                Heartland contribute heavily to Central Assembly decisions
                related to technology, industry, and infrastructure development.
              </li>
            </ul>
          </Wiki.Section>
          <Wiki.Section header={{ heading: <>Midland Regions</> }}>
            <ul className="ml-8">
              <li>
                <strong>Characteristics</strong>: The Midlands are vital for the
                production of technotide items, offering an ideal environment
                with moderate Astral Tide influence and stable technological
                operations.
              </li>
              <li>
                <strong>Governance</strong>: Midlands governments have autonomy
                over their technotide industries and participate actively in
                economic and strategic planning at the federal level.
              </li>
              <li>
                <strong>Decision-Making</strong>: Representatives from the
                Midlands influence Central Assembly policies related to
                technotide production, research, and the balance between Tide
                and technology.
              </li>
            </ul>
          </Wiki.Section>
          <Wiki.Section header={{ heading: <>Frontier Regions</> }}>
            <ul className="ml-8">
              <li>
                <strong>Characteristics</strong>: Frontier Regions, which house
                the most vital and far-ranging Astral Gateways as well as many
                Nebular Nooks, are crucial for trade and resource acquisition.
              </li>
              <li>
                <strong>Governance</strong>: These regions have significant
                autonomy and play a crucial role in resource management and
                trade regulation.
              </li>
              <li>
                <strong>Decision-Making</strong>: Representatives from the
                Frontier regions are pivotal in decisions regarding resource
                management, Astral Gateway stewardship, and trade policies.
              </li>
            </ul>
          </Wiki.Section>
          <Wiki.Section header={{ heading: <>Dynamics</> }}>
            <ul className="ml-8">
              <li>
                <strong>Consensus Building</strong>: The GBC&apos;s
                decision-making process is characterized by consensus-building
                and coalition formation among the Central Assembly and the
                various provincial assemblies.
              </li>
              <li>
                <strong>Negotiation &amp; Compromise</strong>: Given the
                divergent interests and priorities of each region,
                decision-making often involves intricate negotiations and
                compromises.
              </li>
              <li>
                <strong>Conflict Resolution</strong>: Conflicts are resolved
                through a combination of negotiation, mediation, and legal
                processes, ensuring fair and equitable decision outcomes.
              </li>
            </ul>
          </Wiki.Section>
        </Wiki.Section>
        <Wiki.Section header={{ heading: <>Fundamental Institutions</> }}>
          <Wiki.Section header={{ heading: <>Central Assembly</> }}>
            <Wiki.P>
              The Central Assembly serves as the federal governance structure of
              the Galactic Basin Coalition (GBC), a coalition born out of
              necessity during times of conflict against external colonial
              powers within the expansive galaxy of Astralys. Its formation is
              deeply rooted in a history of charismatic leadership, collective
              decision-making, and profound connection to the mystical Astral
              Tide, elements that continue to shape its function and symbolism.
            </Wiki.P>
            <Wiki.P>
              The Assembly is comprised of three pivotal institutions: the
              United Cabinet, the Interstellar Council, and the Astral Court.
              The United Cabinet, led by the Provost, is a reflection of the
              visionary and unifying leadership that initially brought together
              the diverse species and star systems of the Galactic Basin. It
              acts as the executive branch, making key decisions and setting the
              strategic direction for the GBC, with each member representing one
              of the major sentient species within the Coalition.
            </Wiki.P>
            <Wiki.P>
              The Interstellar Council is the legislative arm, embodying the
              collective action and representation of various star systems. It
              serves as a forum for deliberation and law-making, where delegates
              from different star systems articulate and negotiate their
              interests and concerns. Lastly, the Astral Court, consisting of
              individuals deeply connected to the Astral Tide, serves as the
              judicial branch. It not only oversees legal matters but also
              guards ancient traditions and rituals associated with the Tide,
              providing wisdom and guidance in issues that intertwine law,
              tradition, and the mystical forces of Astralys.
            </Wiki.P>
            <Wiki.P>
              Together, these institutions create a balanced and dynamic
              governance structure, navigating the practicalities of
              administration while also symbolizing the rich history and shared
              identity of the GBC. Each branch plays a crucial role, carrying
              the weight of history while guiding the Coalition through the
              challenges and opportunities presented by the ever-unfolding
              narrative of the Astralys universe.
            </Wiki.P>
            <Wiki.Section
              header={{
                heading: <>United Cabinet of the Central Assembly</>,
              }}
            >
              <Wiki.P>
                The United Cabinet is a crucial component of the GBC&apos;s
                governance, comprised of representatives from each officially
                recognized major sentient species within the coalition. Each
                representative, serving a five-year term, is selected through
                their respective species&apos; unique electoral processes. These
                elections are staggered to ensure a balance of freshness and
                longevity to the cabinet&apos;s deliberations.
              </Wiki.P>
              <Wiki.P>
                The Provost of the United Cabinet, elected by the cabinet
                members who each get two votes, serves as the coalition&apos;s
                figurehead and primary representative in foreign relations,
                embodying the GBC&apos;s values and principles. While the
                Provost plays a significant role in shaping public opinion and
                fostering unity domestically, their power in internal
                decision-making is balanced, holding an equal vote alongside
                other cabinet members on crucial matters. The Provost
                facilitates productive and inclusive discussions within the
                cabinet, steering it towards consensus and harmony while
                addressing the GBC&apos;s strategic priorities and challenges.
              </Wiki.P>
              <Wiki.P>
                The United Cabinet holds substantial decision-making authority,
                with the power to veto legislation and set the GBC&apos;s
                strategic direction. It acts as a melting pot of ideas and
                visions from across the Galactic Basin, collaboratively crafting
                policies and initiatives that resonate with and benefit all
                member species. Through its collective leadership, the cabinet
                guides the GBC towards shared prosperity and understanding,
                reflecting the coalition&apos;s principles of unity,
                cooperation, and representation.
              </Wiki.P>
            </Wiki.Section>
            <Wiki.Section
              header={{
                heading: <>Interstellar Council of the Central Assembly</>,
              }}
            >
              <Wiki.P>
                The Interstellar Council is the primary legislative body of the
                Central Assembly, ensuring representation for every star system
                within the coalition. Its composition is based on a dynamic
                delegate allotment system, with each star system sending a
                minimum of three delegates and additional delegates allotted for
                larger populations.
              </Wiki.P>
              <Wiki.P>
                Delegates are autonomously selected by their respective star
                systems, reflecting the diverse governance structures and
                traditions across the GBC. The Assembly is responsible for
                crafting and passing laws, approving budgets, and adopting
                resolutions that address the needs and challenges of the
                coalition&apos;s diverse constituents.
              </Wiki.P>
              <Wiki.P>
                The Assembly is organized into various committees, including
                Legislative, Oversight, Investigative, and Advisory Committees.
                These committees play crucial roles in drafting and refining
                legislation, conducting oversight and investigations, and
                providing expert advice on complex issues. They are comprised of
                Assembly delegates and external experts, offering a blend of
                political and technical expertise.
              </Wiki.P>
              <Wiki.P>
                For its internal operations and decision-making processes, the
                Interstellar Council shall initially presume a structure similar
                to that of the United States Senate. What this means is that
                there shall exist a leadership structure, a schedule for regular
                and emergency sessions, mechanisms for citizen engagement, and
                accountability measures in the future, which shall be defined as
                the world-building process continues.
              </Wiki.P>
              <Wiki.P>
                Through its representative structure and functions, the
                Interstellar Assembly plays a pivotal role in the GBC&apos;s
                governance, providing a forum for deliberation and
                decision-making that reflects the interests and contributions of
                all member star systems. Its work is integral to shaping the
                legal and policy framework of the GBC, guiding the coalition
                towards shared goals and principles of unity, cooperation, and
                representation.
              </Wiki.P>
            </Wiki.Section>
            <Wiki.Section
              header={{ heading: <>Astral Court of the Central Assembly</> }}
            >
              <Wiki.P>
                The Astral Court is comprised of Astral Judges, their number
                determined by a unique formula: the nearest prime number less
                than or equal to five times the number of members in the United
                Cabinet. Judges are individuals deeply connected to the Astral
                Tide, hailing from various territories within the GBC. These
                individuals are not only versed in legal matters but also
                possess profound understanding and connection to the Tide. They
                may include Moivari Visionaries, Pyronian Master Artificers,
                Dendran wise-folk, Human Tidebinders, or other Tidally-renowned
                figures from different species and cultures.
              </Wiki.P>
              <Wiki.P>
                Selecting Astral Judges involves a meticulous process jointly
                conducted by the United Cabinet and the Interstellar Council.
                This process aims to identify and nominate individuals renowned
                for their wisdom, experience, and connection to the Tide,
                irrespective of their species or cultural background. The
                nomination process is designed to be inclusive and meritocratic,
                ensuring that the Court benefits from a diverse and
                knowledgeable composition.
              </Wiki.P>
              <Wiki.P>
                Astral Judges serve for fixed terms, with the possibility of
                extension to accommodate the long lifespans and accumulated
                wisdom characteristic of individuals deeply connected to the
                Tide. The tenure structure is flexible, acknowledging the unique
                qualities and contributions of each judge while ensuring
                stability and continuity within the Court.
              </Wiki.P>
              <Wiki.P>
                The Astral Court is the supreme judicial body within the GBC,
                tasked with adjudicating on critical and complex legal issues.
                It holds particular expertise and authority over matters related
                to the Tide and Technotide artifacts. Beyond its judicial
                functions, the Court also serves as a guardian and custodian of
                ancient rituals, traditions, and ceremonies associated with the
                Tide, playing a crucial role in preserving and interpreting the
                cultural and spiritual heritage of the GBC&apos;s diverse
                populations.
              </Wiki.P>
            </Wiki.Section>
          </Wiki.Section>
        </Wiki.Section>
      </Wiki.Section>
    </Wiki.Main>
  );
}
