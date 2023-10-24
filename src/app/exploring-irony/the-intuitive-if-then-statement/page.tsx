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
          like the conditional would apply, right? I&apos;m not making an
          intuitively False statement that if <strong>P</strong> then{" "}
          <strong>Q</strong> evaluates to True in the condition that both{" "}
          <strong>P</strong> and <strong>Q</strong> evaluate to True.
        </Wiki.P>
        <Wiki.P>
          What if, in reality, I dropped the water bottle (<strong>P</strong> =
          True) and it actually did not hit the floor (<strong>Q</strong> =
          False)? That it managed to land on a table and never hit the ground?
          We would be forced to conclude that the conditional does not apply.
          After all, we were positing that, when we released the water bottle,
          somehow it would make it to the floor. But it didn&apos;t. So this
          case, when <strong>P</strong> is True but <strong>Q</strong> is False,
          would be False in our intuitive understanding of the conditional.
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
          suggesting it as a hypothetical scenario. He was betting on the causal
          properties of gravity that the conditional was actually discussing,
          not on Alice&apos;s arbitrary decision to follow her own procedure
          she&apos;d laid out.
        </Wiki.P>
        <Wiki.P>
          As such, intuitively, we&apos;re forced to acknowledge that, if{" "}
          <strong>P</strong> is False, if the antecedent is not fulfilled, then
          the intuitive if...then... statement is necessarily False. We organize
          the logic of the past few paragraphs into a simple truth table here.
          We shall call this the <em>literal</em> conditional.
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Literal Conditional Truth Table
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
          heading: <>The Procedural Nature of the Literal Conditional</>,
        }}
      >
        <Wiki.P>
          Now, the literal conditional which we&apos;ve formulated is the
          simplest formulation of the conditional which can be made because it
          is <em>procedural</em> in nature. We intuitively reason through
          decision-trees and procedures - through straightforward recipes and
          instructions, not through ambiguous hypotheticals and scenarios. As
          such, when we encounter a conditional out in the wild, it is this{" "}
          <em>literal</em> interpretation which serves us best. All it is merely
          saying is that &quot;If and only if some antecedent is fulfilled will
          some consequent follow.&quot;
        </Wiki.P>
        <Wiki.P>
          However, recall that it is not the same as saying that the consequent
          will never occur if the antecedent is False. That is because what we
          are engaging in is not hypothetical-based reasoning but
          procedural-based reasoning. To account for the possibility of some
          consequent to occur of the antecedent is False, we have the concept of
          the &quot;If...Then...Else...&quot; statement in procedural logic. For
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
      <Wiki.Section header={{ heading: <>The Pedantic Conditional</> }}>
        <Wiki.P>
          Now, there&apos;s also another way of interpreting the conditional in
          natural language, and it is by reading the if...then... statement{" "}
          <em>pedantically</em>, much like how Alice did in our first example.
          You see, Alice is all about making Bob&apos;s life as ironic as
          possible. A place where If False Then True is a perfectly valid
          conditional to make.
        </Wiki.P>
        <Wiki.P>As such, she says to Bob, &quot;</Wiki.P>
      </Wiki.Section>
    </Wiki.Main>
  );
}
