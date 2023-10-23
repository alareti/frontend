"use client";

import * as Wiki from "@/src/components/wiki";

export default function Index() {
  return (
    <Wiki.Main
      title={
        <>
          The Ironic <i>If...Then...</i> Statement
        </>
      }
      subtitle={<>Discovery of an unexpected connection</>}
    >
      <Wiki.Section>
        <Wiki.P>
          Irony is, on the surface, deeply illogical. When arguing a point in
          any serious way, the use of irony is a sure-fire way to be accused of
          being &quot;rhetorical&quot; or &quot;intellectually
          disengenuous&quot; by one&apos;s opponent. The formal study of truth
          is even more averse to irony. To rhetorically argue in mathematics or
          logic is equivalent to simply being dismissed out of hand. That is why
          the language of formal logic was devised - to escape the trappings of
          the rhetorical aspects of natural language and to simply focus on the
          serious bits which seemed helpful in discovering truth.
        </Wiki.P>
        <Wiki.P>
          However, in the previous article in this series, we questioned natural
          language&apos;s capacity to engage in &quot;truth-seeking&quot; in any
          real sense. We came to view the logical constructs found in natural
          language not so much as <em>truth-seeking</em> devices, but as aids in{" "}
          <em>decision-making</em>. We recognized this, with regards to the{" "}
          <i>If...Then...</i>, as the difference between formal hypotheticals
          and control-flow conditionals. And if natural language is a precise
          method of rational decision-making as opposed to rational
          truth-seeking, then why does formal logic has natural language as its
          foundation?
        </Wiki.P>
        <Wiki.P>
          Previously we formulated the intuitive <i>If...Then...</i> statement
          as one which allows us to{" "}
          <em>utilize context to formulate expectations</em>. Perhaps there
          exists a variant of the natural language <i>If...Then...</i> statement
          that{" "}
          <em>utilizes context to formulate the subversion of expectations?</em>
        </Wiki.P>
        <Wiki.P>
          Enter the ironic <i>If...Then...</i> statement.
        </Wiki.P>
      </Wiki.Section>
      <Wiki.Section
        header={{
          heading: (
            <>
              Formulating the Straightforward Ironic <i>If...Then...</i> Variant
            </>
          ),
        }}
      >
        <Wiki.P>
          Let&apos;s introduce an example to help ground our discussion. The
          situation is as follows: Alice is playing a gambling game with Bob.
          Bob makes a reckless and risky bet that could prove decisive. Alice
          ponders her options, and decides to be conservative and see how
          Bob&apos;s bet plays out. She scoffs a bit at Bob and remarks
          sarcastically, &quot;If you win this round, then pigs fly.&quot; Bob
          quips back just as fast, &quot;Never doubt the power of flying
          pigs,&quot; and throws the dice. Both are eager to see the outcome of
          his gamble.
        </Wiki.P>
        <Wiki.P>
          Our focus in this article is on developing our understanding of the
          ironic <i>if...then...</i> statement (henceforth, we capture ironic
          statements as <i>all-lowercase italics</i>). As such we focus on
          Alice&apos;s phrase, since it seems to be used rhetorically as opposed
          to straightforwardly. What is immediately apparent is that her phrase
          acts as a <em>commentary on the situation as a whole</em>. She is
          making an exaggerated hyperbole to essentially express to Bob that she{" "}
          <em>does not expect that Bob will win</em>.
        </Wiki.P>
        <Wiki.P>
          The question is, &quot;Why did she state it rhetorically as opposed to
          straightforwardly?&quot; Upon reflection, we find ourselves answering
          that{" "}
          <em>
            Alice recognizes that there is ironic potential in the situation
            she&apos;s found herself in.
          </em>{" "}
          It would be ironic for her that Bob should win the round, since Bob
          made such a risky and potentially decisive move and she decided to
          essentially ignore it and play her hand conservatively. And as such,
          she has formulated her ironic statement not so much to generate irony
          in itself, but to make it known to Bob that she thinks{" "}
          <i>something ironic may occur here</i>.
        </Wiki.P>
        <Wiki.P>
          This means that the circumstances of the situation itself has the
          potential to be ironic, and Alice simply is expressing her awareness
          of this fact. This implies that we can evaluate each clause of her{" "}
          <i>if...then...</i> statement independently and deduce which of these
          4 scenarios would be <em>situationally ironic</em>. Which of these
          scenarios is Alice referring to does she perceive to be ironic? We
          limit ourselves, for now, to the <em>straightforwardly ironic</em>{" "}
          case. This means that we are trying to ascertain the condition where
          the <em>outcome of the situation</em> aligns with the{" "}
          <em>point that Alice was trying to make.</em> This implies, on further
          analysis, that Alice&apos;s and Bob&apos;s{" "}
          <em>shared context must be rigidly enforced.</em> This aspect will be
          explained further in the example section for straightforward irony.
        </Wiki.P>
        <Wiki.P>
          Like in the previous article, let&apos;s try to formulate a boolean
          representation of this ironic statement. For each combination of{" "}
          <strong>P</strong> (did Bob win?) and <strong>Q</strong> (Do pigs
          fly?) we shall evaluate whether the situation as a whole is
          straightforwardly ironic - True if so, False otherwise. The
          step-by-step details are found in the next section, but by the end, we
          shall have arrived at the following formulation of the irony of a
          scenario as implied by the straightforward and situational ironic{" "}
          <i>if...then...</i> statement.
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Straightforward Ironic <i>if...then...</i> Truth Table
          </caption>

          <tr>
            <th className="border border-neutral-700 p-2">Input P</th>
            <th className="border border-neutral-700 p-2">Input Q</th>
            <th className="border border-neutral-700 p-2">Ironic</th>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">True</td>
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
          heading: (
            <>
              An Example of Straightforward Ironic <i>if...then...</i> Logic
            </>
          ),
        }}
      >
        <Wiki.P>
          So now we go through and consider just when the situation becomes
          ironic. Given Alice&apos;s statement, which for convenience&apos;s
          sake we convert to &quot;If Bob wins, then pigs fly,&quot; we evaluate
          whether there exists a straightforward, situational irony or not.
          Let&apos;s start with the abstract ironic{" "}
          <i>
            if <strong>P</strong> then <strong>Q</strong>
          </i>{" "}
          and see under which conditions <strong>Output</strong>, or{" "}
          <strong>Ironic</strong>, evaluates to True. So now we shall assign
          truth values to each input <strong>P</strong> (Does Bob win?) and{" "}
          <strong>Q</strong> (Do pigs fly?) and proceed to evaluate whether the
          situation as a whole becomes straightforwardly ironic.
        </Wiki.P>
        <Wiki.P>
          Let&apos;s start by assigning True to <strong>P</strong>. This means
          that Bob does actually win, and subverts Alice&apos;s expectations.
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Straightforward Ironic <i>if...then...</i> Truth Table
          </caption>

          <tr>
            <th className="border border-neutral-700 p-2">Input P</th>
            <th className="border border-neutral-700 p-2">Input Q</th>
            <th className="border border-neutral-700 p-2">Ironic</th>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
          </tr>
        </table>
        <Wiki.P>
          Now we assign True to <strong>Q</strong>, which means that pigs do
          actually fly. This means that it does not align with Alice&apos;s and
          Bob&apos;s shared context.
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Straightforward Ironic <i>if...then...</i> Truth Table
          </caption>

          <tr>
            <th className="border border-neutral-700 p-2">Input P</th>
            <th className="border border-neutral-700 p-2">Input Q</th>
            <th className="border border-neutral-700 p-2">Ironic</th>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">True</td>
          </tr>
        </table>
        <Wiki.P>
          Would the outcome of Bob winning and pigs actually flying be ironic?
          Yes, but not in the way Alice intended. Remember, we are aiming to
          investigate <em>straightforward</em> irony for now, and that means we
          must rigidly enforce the <em>integrity of the shared context</em>{" "}
          between Alice and Bob. The straightforward ironic <i>if...then...</i>{" "}
          statement is trying to establish an equivalence between the subversive
          qualities of <strong>P</strong> and <strong>Q</strong>. If the shared
          context is found lacking, this would be an example of{" "}
          <em>meta-irony</em>, not straightforward irony.
        </Wiki.P>
        <Wiki.P>
          What happens if we were to un-enforce the integrity of the shared
          context? Straightforward irony is essentially trying to say that
          &quot;If <strong>P</strong> (Bob winning) were to actually happen,
          then it is equally as subversive as though <strong>Q</strong> (pigs
          flying) were to actually happen.&quot; But if <strong>Q</strong> does
          actually happen, it would imply that <strong>P</strong> actually
          happening should not subvert expectations, though really it still
          does. Irony is present, but Alice&apos;s point about the subversive
          quality of <strong>P</strong> equating with <strong>Q</strong> is not.
          The statement&apos;s intent, therefore, is not maintained.
        </Wiki.P>
        <Wiki.P>
          We&apos;d previously defined straightforward irony as when the{" "}
          <em>outcome of the scenario follows the point trying to be made.</em>{" "}
          <strong>Q</strong> evaluating to True speaks more to the
          speaker&apos;s misunderstanding of context than it does to the
          straightforward intent of the statement. Therefore, this is{" "}
          <em>not</em> a case of straightforward irony.
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Straightforward Ironic <i>if...then...</i> Truth Table
          </caption>

          <tr>
            <th className="border border-neutral-700 p-2">Input P</th>
            <th className="border border-neutral-700 p-2">Input Q</th>
            <th className="border border-neutral-700 p-2">Ironic</th>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
          </tr>
        </table>
        <Wiki.P>
          We move onto the second row. We set <strong>P</strong> to True,
          meaning that Bob actually wins, subverting Alice&apos;s expectations.
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Straightforward Ironic <i>if...then...</i> Truth Table
          </caption>

          <tr>
            <th className="border border-neutral-700 p-2">Input P</th>
            <th className="border border-neutral-700 p-2">Input Q</th>
            <th className="border border-neutral-700 p-2">Ironic</th>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
          </tr>
        </table>
        <Wiki.P>
          We now set <strong>Q</strong> to False. We therefore assume, in
          accordance with Alice&apos;s and Bob&apos;s shared context, that pigs
          do not actually fly.
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Straightforward Ironic <i>if...then...</i> Truth Table
          </caption>

          <tr>
            <th className="border border-neutral-700 p-2">Input P</th>
            <th className="border border-neutral-700 p-2">Input Q</th>
            <th className="border border-neutral-700 p-2">Ironic</th>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
          </tr>
        </table>
        <Wiki.P>
          Is this outcome ironic? Yes, because <strong>P</strong> being True and{" "}
          <strong>Q</strong> being False effectively establishes that, were{" "}
          <strong>P</strong> to be True, it is equally as subversive as if{" "}
          <strong>Q</strong> were to be True. We therefore set{" "}
          <strong>Ironic</strong> to True.
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Straightforward Ironic <i>if...then...</i> Truth Table
          </caption>

          <tr>
            <th className="border border-neutral-700 p-2">Input P</th>
            <th className="border border-neutral-700 p-2">Input Q</th>
            <th className="border border-neutral-700 p-2">Ironic</th>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">True</td>
          </tr>
        </table>
        <Wiki.P>
          Now we move onto the third row and set <strong>P</strong> to False.
          This means that Bob actually does not win. Alice&apos;s expectations
          were not subverted.
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Straightforward Ironic <i>if...then...</i> Truth Table
          </caption>

          <tr>
            <th className="border border-neutral-700 p-2">Input P</th>
            <th className="border border-neutral-700 p-2">Input Q</th>
            <th className="border border-neutral-700 p-2">Ironic</th>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">True</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">False</td>
          </tr>
        </table>
        <Wiki.P>
          We set <strong>Q</strong> to be True. Pigs do actually fly. This means
          that it does not align with Alice&apos;s and Bob&apos;s shared
          context.
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Straightforward Ironic <i>if...then...</i> Truth Table
          </caption>

          <tr>
            <th className="border border-neutral-700 p-2">Input P</th>
            <th className="border border-neutral-700 p-2">Input Q</th>
            <th className="border border-neutral-700 p-2">Ironic</th>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">True</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">True</td>
          </tr>
        </table>
        <Wiki.P>
          Is this scenario ironic? Yes, but only in the same way as the first
          row, which means that it wasn&apos;t Alice&apos;s intent to imply that
          Bob&apos;s chances of winning the bet are equivalent to something that
          actually happens. This is another case of <em>meta-irony.</em> Because
          the shared context between Alice and Bob was not maintained, we cannot
          claim that this is straightforward irony. We thus set{" "}
          <strong>Ironic</strong> to False.
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Straightforward Ironic <i>if...then...</i> Truth Table
          </caption>

          <tr>
            <th className="border border-neutral-700 p-2">Input P</th>
            <th className="border border-neutral-700 p-2">Input Q</th>
            <th className="border border-neutral-700 p-2">Ironic</th>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">True</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
          </tr>
        </table>
        <Wiki.P>
          And finally, the last row. We set both <strong>P</strong> and{" "}
          <strong>Q</strong> to False, meaning that Bob does not win, aligning
          with Alice&apos;s expectations, and pigs do not fly, in accordance
          with Alice&apos;s and Bob&apos;s shared context.
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Straightforward Ironic <i>if...then...</i> Truth Table
          </caption>

          <tr>
            <th className="border border-neutral-700 p-2">Input P</th>
            <th className="border border-neutral-700 p-2">Input Q</th>
            <th className="border border-neutral-700 p-2">Ironic</th>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">True</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">False</td>
          </tr>
        </table>
        <Wiki.P>
          Is this outcome ironic? Not really - this is what Alice&apos;s
          original statement was trying to assert. Namely, that Bob&apos;s
          chances of winning are about as good as a pig flying. Nothing subverts
          expectation - Alice expected that Bob would not win the bet, and that
          pigs do not fly, which is what this case establishes. Thus, we set{" "}
          <strong>Ironic</strong> to False.
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Straightforward Ironic <i>if...then...</i> Truth Table
          </caption>

          <tr>
            <th className="border border-neutral-700 p-2">Input P</th>
            <th className="border border-neutral-700 p-2">Input Q</th>
            <th className="border border-neutral-700 p-2">Ironic</th>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">True</td>
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
        <Wiki.P>
          And so now we have derived the straightforward and situational ironic{" "}
          <i>if...then...</i> truth table, establishing that this simple type of
          irony requires the elements of <em>subversion of expectation</em> and{" "}
          <em>integrity of the shared context</em>. If the integrity of the
          shared context were not assumed as it was in this analysis, then we
          couldn&apos;t say that Alice and Bob would have been able to
          understand each other&apos;s ironic statements. It would be like Alice
          saying to Bob &quot;If you win this bet, then there&apos;s an even
          number of stars in our galaxy.&quot; <strong>Q</strong>, in this case,
          is not shared context between Alice and Bob, and so Bob would not be
          sure if Alice is engaging in irony or not. That is why, when{" "}
          <strong>Q</strong> is False, we default to setting{" "}
          <strong>Ironic</strong> to False as opposed to True.{" "}
          <strong>Q</strong> being False implies that the shared context&apos;s
          integrity wasn&apos;t solid, and thus the statement can not be
          &quot;straightforwardly&quot; ironic.
        </Wiki.P>
      </Wiki.Section>
      <Wiki.Section
        header={{
          heading: (
            <>
              The Straightforward Ironic <i>if...then...</i> as the Inverse of
              the Formal <i>IF...THEN...</i>
            </>
          ),
        }}
      >
        <Wiki.P>
          Now, something interesting happens when we compare the straightforward
          ironic <i>if...then...</i> with the formal variant.{" "}
          <em>They are exact inverses of each other.</em> I&apos;ve recreated
          the formal <i>IF...THEN...</i> truth table here, but suffice to say,
          where a straightforward statement is ironically true, it is
          unironically false; and when it is unironically true, it is ironically
          false. What could this mean?
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Formal <i>IF...THEN...</i> Truth Table
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
            <td className="border border-neutral-700 p-2">True</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">True</td>
          </tr>
        </table>
        <Wiki.P>
          Is formal logic couched in exploring the &quot;unironic&quot;? Could
          the goal of formal logic, of discovering truth, possibly be the{" "}
          <em>minimization of irony?</em> Is the foundation of our capacity to
          ascertain truth founded upon subverting our intuitive notions of
          irony? To make deductions and hypotheticals that are as{" "}
          <em>unironic</em> as possible?
        </Wiki.P>
        <Wiki.P>
          This is a fascinating possibility because it not only gives an
          intuitive foundation for humanity&apos;s capacity to discover Truth,
          but also explains why it feels so dry and difficult. It is unemotional
          not because it is artificial and contrived, but because it is couched
          at arm&apos;s length in something deeply engaging and emotional -
          namely, our capacity to express situational irony in natural language.
          Formal logic is our capacity to reason <em>unemotionally</em> and{" "}
          <em>seriously</em>, which is in stark contrast to irony, which allows
          us to reason <em>contextually</em> and <em>intuitively</em>.
        </Wiki.P>
        <Wiki.P>
          However, we must push on. This is an interesting development, perhaps
          indicating something larger at play, but let&apos;s stay focused on
          the task at hand. We&apos;ll consider it a curiosity, and proceed to
          investigate the meta-ironic <i>if...then...</i> variant. We&apos;ve
          posited that the situationally straightforward ironic statement
          requires that Alice and Bob&apos;s shared context is rigidly enforced.
          What happens when we intentionally break this constraint, and allow
          for an irony based on the subversion of the context of the situation?
          We proceed with a brief example examining this case.
        </Wiki.P>
      </Wiki.Section>
      <Wiki.Section
        header={{
          heading: (
            <>
              An Example of Meta Ironic <i>if...then...</i> Logic
            </>
          ),
        }}
      >
        <Wiki.P>
          Let&apos;s alter the scenario to read thus: Alice is playing a
          gambling game with Bob. Bob makes a reckless and risky bet that could
          prove decisive. Alice ponders her options, and decides to be
          conservative and see how Bob&apos;s bet plays out. She scoffs a bit at
          Bob and remarks sarcastically, &quot;If you win this round, then pigs
          fly.&quot; Bob quips back just as fast, &quot;Never doubt the power of
          flying pigs,&quot; and throws the dice. Both are eager to see the
          outcome of his gamble, but alas, a flying piglet careens into the room
          and throws the whole game into chaos. Alice and Bob both look at each
          other and say, &quot;Wasn&apos;t expecting <i>that</i> to
          happen!&quot; as they open the window to let the avian swine continue
          on its way.
        </Wiki.P>
        <Wiki.P>
          In this case, we never know what Bob&apos;s roll of the dice evaluated
          to. Did Bob win or did he lose? It matters for the straightforward
          case when the context set by Alice&apos;s statement &quot;If Bob wins,
          then pigs fly&quot; was intact (namely, that pigs <em>don&apos;t</em>{" "}
          fly). But when looking solely at meta-irony, it doesn&apos;t really
          matter. What matters for our analysis of meta irony is whether{" "}
          <em>Alice&apos;s and Bob&apos;s shared context was subverted.</em>{" "}
          Thus, regardless of what Bob&apos;s gamble might have evaluated to, if
          pigs don&apos;t fly, then there is no meta irony. And likewise, there
          is meta irony only if pigs <em>do</em> fly, regardless of Bob&apos;s
          roll. As such, we express the Meta Ironic Truth Table as follows.
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Meta Ironic <i>if...then...</i> Truth Table
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
            <td className="border border-neutral-700 p-2">True</td>
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
          heading: (
            <>
              The General Ironic <i>if...then...</i> Statement
            </>
          ),
        }}
      >
        <Wiki.P>
          Now, let&apos;s combine the two concepts - what would a truth table
          look like that expresses whether there exists situational irony? If
          either there exists straightforward or meta irony in a situation? We
          accomplish this by <i>OR</i>-ing the two possibilities:
        </Wiki.P>
        <Wiki.P>
          Ironic{" "}
          <i>
            if <strong>P</strong> then <strong>Q</strong>
          </i>{" "}
          := (Straightforward ironic{" "}
          <i>
            if <strong>P</strong> then <strong>Q</strong>
          </i>
          ) <i>OR</i> (Meta ironic{" "}
          <i>
            if <strong>P</strong> then <strong>Q</strong>
          </i>
          )
        </Wiki.P>
        <Wiki.P>
          The truth table for the ironic <i>if...then...</i> is as follows.
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Ironic <i>if...then...</i> Truth Table
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
            <td className="border border-neutral-700 p-2">True</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">True</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">False</td>
          </tr>
        </table>
      </Wiki.Section>
      <Wiki.Section header={{ heading: <>Properties of Ironic Statements</> }}>
        <Wiki.P>
          Let&apos;s try to think abstractly for a moment. What, really, is the
          ironic <i>if...then...</i> trying to get at? What point is it really
          trying to make? It is trying to make a point about the{" "}
          <em>situation</em> at hand, that is why we&apos;ve declared what
          we&apos;re investigating as situational irony. I&apos;ll also requote
          an important line of reasoning I mentioned earlier. The situationally
          ironic <i>if...then...</i> is trying to establish that I &quot;if{" "}
          <strong>P</strong> were to actually happen, then it is equally as
          subversive as though <strong>Q</strong> were to actually happen.&quot;
        </Wiki.P>
        <Wiki.P>
          This implies two elements: an <em>expectation</em> as bounded by a{" "}
          <em>context</em>. The expectation is that <strong>P</strong> is not
          going to happen. The context implies that <strong>Q</strong> is
          impossible.
        </Wiki.P>
        <Wiki.P>
          If the expectation is subverted, then it is an instance of
          straightforward irony. If the context is proven to be deficient, then
          it is an example of meta-irony.
        </Wiki.P>
        <Wiki.P>
          Let&apos;s think about the implications of this. For a situation to be
          unironic, it means that both our expectations and our context are
          accurate. This is essentially saying that our conception of reality is
          not subverted.
        </Wiki.P>
        <Wiki.P>
          For a situation to be straightforwardly ironic, it means that, though
          our expectations about the outcome of an event be wrong, our entire
          worldview is not under question. This is essentially saying that,
          though we may have been mistaken, no fundamental shift in perspective
          needs to take place to account for this error.
        </Wiki.P>
        <Wiki.P>
          For a situation to be meta-ironic, it means that our entire
          perspective on reality is under question. What we thought to be the
          exclusive domain of impossibility is shown to be possible. Our entire
          worldview, essentially, gets thrown into chaos, and we must make a
          shift in perspective to account for this.
        </Wiki.P>
        <Wiki.P>
          So what, then, is irony, fundamentally? It seems to me, with these
          properties in mind, that it is the{" "}
          <em>
            intuitive mechanism by which we detect and reason about paradoxes.
          </em>{" "}
          It straightforwardly detects a paradox, because our sense of irony is
          only triggered when some aspect of our understanding of reality is
          subverted. It is the mechanism by which we reason about paradoxes,
          because we can directly categorize the paradoxes as either{" "}
          <em>existential</em> or <em>non-existential.</em> As <em>trivial</em>{" "}
          or <em>fundamental</em> challenges to our conception of reality.
        </Wiki.P>
      </Wiki.Section>
      <Wiki.Section
        header={{
          heading: <>Irony as our Intuitive Method of Paradoxical Inquiry</>,
        }}
      >
        <Wiki.P>
          Irony, then, is our <em>Intuitive Method of Paradoxical Inquiry.</em>{" "}
          It operates in its own realm, distinct from the decision-making realm
          of literal or unironic natural language. We noted in the previous
          article how literal natural language is more of a tool for
          decision-making than it is for truth-evaluation. It doesn&apos;t deal
          with hypotheticals very often, and we made the claim that it
          doesn&apos;t really need to concern itself very much with
          truth-evaluation, as such, in order to function well{" "}
          <em>within the context of our understanding of the world.</em>
        </Wiki.P>
        <Wiki.P>
          Irony, then, offers the other side of the coin in how we understand
          the world. It allows us to detect{" "}
          <em>when our understanding of the world is deficient.</em> It
          accomplishes this by detecting <em>paradoxes.</em> And not only that,
          but irony can detect when the irony itself is ironic through
          meta-irony. This allows it to decipher and categorize what sort of
          paradox it is inquiring about. Is it an existential or a trivial
          paradox? Does this paradox seriously challenge my perception of
          reality, or is it easily incorporated into my understanding of the
          world? These are the sorts of questions which irony directly and
          intuitively reasons about. And perhaps through this intuitive
          paradoxical reasoning, it helps course-correct the heuristic and often
          context-dependent decisions we make when navigating the world.
        </Wiki.P>
        <Wiki.P>
          I believe that it is this interplay between our capacity to intuit
          irony and intuitively make context-dependent decisions which forms the
          foundation of our capacity to understand Truth as such. One is the
          domain of executive function, and the other of meditative reflection.
          It is only through their confluence that one come&apos;s to understand
          the world, and by extension, Truth.
        </Wiki.P>
        <Wiki.P>
          In the next article, I aim to propose an algorithmic method of how
          this interaction between these two variants of the natural language
          If...Then... statement leads to our formal understanding of the
          If...Then... statement. It shall provide a framework by which one can
          evaluate the Truth of scenarios on an intuitive basis, and perhaps
          shed light on the foundations on our cognitive capacity to reason. By
          deriving the formal If...Then... statement from intuitive notions of
          it, we&apos;ll gain an insight into its intuitive foundations, and
          perhaps even into reason itself.
        </Wiki.P>
      </Wiki.Section>
    </Wiki.Main>
  );
}
