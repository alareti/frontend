"use client";

import * as Wiki from "@/src/components/wiki";

export default function Index() {
  return (
    <Wiki.Main
      title={
        <>
          The Intuitive <i>If...Then...</i> Statement
        </>
      }
      subtitle={<>An elucidation of discrepancies</>}
    >
      <Wiki.Section>
        <Wiki.P>
          What does it mean for an <i>If...Then...</i> statement, otherwise
          known as a conditional statement, to be intuitive? The appropriateness
          of a conditional in natural language depends sorely on context and
          nuance, but one thing is for certain - it somehow relates two clauses
          - the <em>antecedent</em> (or <em>if-clause</em>) and the consequent,
          (or <em>then-clause</em>). Even in the simplest of forms, the way that
          they are used in natural language differs significantly from formal
          logic. Let&apos;s take a look.
        </Wiki.P>
      </Wiki.Section>
      <Wiki.Section header={{ heading: <>A Simple Conditional</> }}>
        <Wiki.P>
          <em>If I drop this water bottle then it will hit the floor.</em>
        </Wiki.P>
        <Wiki.P>
          This is a rather simple conditional. We feel like we know what this
          means. But do we really? Intuitively, if <strong>P</strong> (the
          antecedent - &quot;I drop this water bottle&quot;) then{" "}
          <strong>Q</strong> (the consequent - &quot;it will hit the
          floor&quot;) feels like a simple statement, but let&apos;s try to dive
          into and see how it intuitively feels when we evaluate it as a truth
          table.
        </Wiki.P>
        <Wiki.P>
          If in reality I dropped the water bottle (<strong>P</strong> = True)
          and it actually hit the floor (<strong>Q</strong> = True) this feels
          like the conditional would apply, right? I predicted that when I
          dropped it, it would hit the floor, and that&apos;s exactly what
          happened. We set <strong>Output</strong> to True.
        </Wiki.P>
        <Wiki.P>
          What if, in reality, I dropped the water bottle (<strong>P</strong> =
          True) and it actually did not hit the floor (<strong>Q</strong> =
          False)? That it managed to land on a table and never hit the ground?
          We would be forced to conclude that the conditional does not apply.
          After all, we were positing that, when we released the water bottle,
          somehow it would make it to the floor. But it didn&apos;t. So in this
          case, when <strong>P</strong> is True but <strong>Q</strong> is False,{" "}
          <strong>Output</strong> would be False in our intuitive understanding
          of the conditional.
        </Wiki.P>
        <Wiki.P>
          And what if I don&apos;t drop the water bottle at all? Let&apos;s say
          we have a hypothetical scenario. Alice has in her hand a water bottle,
          and says to Bob, &quot;I bet you $100 that if I drop this water bottle
          then it won&apos;t hit the ground.&quot; Bob considers it a moment, he
          ensures that nothing is in the water bottle&apos;s trajectory, that
          the laws of gravity are still functioning, and everything seems to
          indicate that if Alice drops the bottle it will hit the ground. He
          says, &quot;I&apos;ll take you up on that bet Alice. If you drop that
          water bottle and it doesn&apos;t hit the ground, I&apos;ll give you
          $100.&quot; Alice then proceeds to hold onto the bottle and inform
          Bob, &quot;Well, since I have no intention of dropping this bottle,
          you owe me $100.&quot;
        </Wiki.P>
        <Wiki.P>
          Does Bob have the right to be infuriated? To say to Alice that she is
          wrong? He was operating under the intuitive assumption that when
          someone suggests &quot;if <strong>P</strong> then <strong>Q</strong>
          &quot; that they will follow it as a procedure as opposed to simply
          suggesting it as a hypothetical scenario. He actually explicitly
          stated this when he said, &quot;If you drop that water bottle{" "}
          <em>and</em> it doesn&apos;t hit the ground.&quot; He was betting on
          the causal properties of gravity, not on Alice&apos;s arbitrary choice
          to follow her own procedure that she&apos;d laid out.
        </Wiki.P>
        <Wiki.P>
          As such, intuitively, we&apos;re forced to acknowledge that, if{" "}
          <strong>P</strong> is False, if the antecedent is not fulfilled, then
          in this case, the intuitive if...then... statement is necessarily
          False. We organize the logic of the past few paragraphs into a simple
          truth table here. We shall call this the <em>plain</em> conditional.
          We call it plain, because Bob took Alice&apos;s bet at face value, or
          &quot;plainly&quot; as opposed to seriously thinking through all of
          the possible scenarios, or &quot;hypothetically.&quot;
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Plain Conditional Truth Table
          </caption>

          <tr>
            <th className="border border-neutral-700 p-2">Input P</th>
            <th className="border border-neutral-700 p-2">Input Q</th>
            <th className="border border-neutral-700 p-2">Output</th>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">True</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">False</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">False</td>
          </tr>
        </table>
      </Wiki.Section>
      <Wiki.Section
        header={{
          heading: <>The Procedural Nature of the Plain Conditional</>,
        }}
      >
        <Wiki.P>
          Now, the plain conditional which we&apos;ve formulated is the simplest
          formulation of the conditional which can be made because it makes
          <em>procedural</em> assumptions. We intuitively reason through
          decision-trees and procedures - through straightforward recipes and
          instructions, not through ambiguous hypotheticals and scenarios. As
          such, when we encounter a conditional out in the wild, it is this{" "}
          <em>plain</em> interpretation which usually applies, since we tend to
          think procedurally. All it is merely saying is that &quot;If and only
          if some antecedent is fulfilled will some consequent follow.&quot;
        </Wiki.P>
        <Wiki.P>
          However, this is not the only way to frame a procedural conditional.
          To account for the possibility of some consequent to occur of the
          antecedent is False, we have the concept of the
          &quot;If...Then...Else...&quot; statement in procedural thought. For
          instance, to explicitly capture the consequent <strong>Q</strong>{" "}
          <em>not</em> happening when the antecedent <strong>P</strong> is
          False, we add the &quot;Else NOT Q&quot; clause to make &quot;if{" "}
          <strong>P</strong> then <strong>Q</strong> else NOT <strong>Q</strong>
          . &quot;
        </Wiki.P>
        <Wiki.P>
          With regards to the water bottle example, this would essentially say,
          &quot;If I drop this water bottle, it will hit the ground; or else, it
          will not hit the ground.&quot; This I shall call the
          &quot;interpreted&quot; conditional truth table, since many times, our
          intuition causes us to &quot;interpret&quot; this extra
          &quot;alternative&quot; clause to exist that is not literally
          specified. It is captured in the below table.
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Interpreted Conditional Truth Table
          </caption>

          <tr>
            <th className="border border-neutral-700 p-2">Input P</th>
            <th className="border border-neutral-700 p-2">Input Q</th>
            <th className="border border-neutral-700 p-2">Output</th>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">True</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">False</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">True</td>
          </tr>
        </table>
      </Wiki.Section>
      <Wiki.Section header={{ heading: <>The Procedural Conditional</> }}>
        <Wiki.P>
          So, the seemingly simple conditional of &quot;if I drop this water
          bottle, then it will hit the ground&quot; already has a few ways of
          interpreting it - the pedantic way which Alice suggested, the plain
          way which Bob assumed, and this new interpreted way that seems also
          could apply to the statement.
        </Wiki.P>
        <Wiki.P>
          And there are many other ways to interpret the conditional as well. We
          could think about it &quot;dogmatically,&quot;
          &quot;skeptically,&quot; or even &quot;ironically&quot; if we so
          choose. The point is that all of these different ways of interpreting
          the conditional is <em>valid</em> and is{" "}
          <em>determined by the context.</em>
        </Wiki.P>
        <Wiki.P>
          Now, I claim that the procedural conditional is the most intuitive.
          Why? Because it works spectacularly well for recipes or instructions
          that involve <em>action</em> as opposed to <em>truth-evaluation.</em>{" "}
          Humans live in a world where <em>actions need to be decided upon</em>{" "}
          and our natural language constructs of conditionals are intrinsically
          geared towards this decision-making paradigm. In fact, a much more
          intuitive way of using the if...then... statement can be found in
          computer programming as opposed to formal logic. It goes something
          like this:
        </Wiki.P>
        <Wiki.P>IF Alice wins bet THEN give Alice $100.</Wiki.P>
        <Wiki.P>
          Here, we are no longer in the truth-evaluating paradigm. We&apos;re in
          the decision-making paradigm, and the If...Then... acts as a{" "}
          <em>control-flow</em> statement as opposed to a <em>hypothetical.</em>
        </Wiki.P>
        <Wiki.P>The interesting thing is that the way we evaluate</Wiki.P>
      </Wiki.Section>
    </Wiki.Main>
  );
}
