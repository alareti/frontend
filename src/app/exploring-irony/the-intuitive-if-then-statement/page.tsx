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
          The role our <i>If...Then...</i> expression plays in natural language
          does not match the role our formal <i>IF...THEN...</i> statement
          serves in logic. It is notorious for tripping up novices of formal
          logic, and it requires a far more elaborate explanation than any of
          the other commonly used formal logic operators, up to and including
          the rather artificial <i>...IF AND ONLY IF...</i> construct. We
          discuss why this discrepancy indicates a profound bifurcation in
          rational thought, and to what extent our relationship with fundamental
          truth is affected by this.
        </Wiki.P>
      </Wiki.Section>
      <Wiki.Section
        header={{
          heading: <>Logic and its Relation to Natural Language</>,
        }}
      >
        <Wiki.P>
          Humans communicate intuitively through natural language. Natural logic
          operators (specified here as <i>Uppercase Italics</i>) play a
          significant role in specifying what is meant in natural language.
          Formal logic operators (specified here as <i>ALLCAPS ITALICS</i>)
          abstracts and standardizes these natural language constructs to
          precisely communicate mathematical assertions. There is a reason why
          the mathematical <i>AND</i> is named such - it is directly and
          unambiguously related to our intuitive conception of <i>And</i>. The
          formal <i>OR</i> directly corresponds to one variant (the inclusive
          variant) of our natural <i>Or</i>, and the <i>EXCLUSIVE OR</i> (or{" "}
          <i>XOR</i>) matches directly with the exclusive variant of our natural{" "}
          <i>Or</i>. There is no reason why this expectation ought to be
          subverted - logic strives for precision, not novelty.
        </Wiki.P>
        <Wiki.P>
          The formal <i>IF...THEN...</i> (also known as <i>...IMPLIES...</i>) is
          an outlier to this principle. In natural language, if Alice were to
          say &quot;<i>If</i> my pet Bob is actually a cat, <i>then</i> the food
          I was feeding Bob was unhealthy for him,&quot; we would say that
          should Bob actually not be a cat, then Alice was not feeding him the
          wrong food the whole time. Let us make a{" "}
          <Wiki.A href={"https://en.wikipedia.org/wiki/Truth_table"}>
            truth table
          </Wiki.A>{" "}
          to help us precisely define what we are getting at.
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            An Intuitive <i>If...Then...</i> Truth Table
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
        <Wiki.P>What does this mean? Let&apos;s take it step by step.</Wiki.P>
      </Wiki.Section>
      <Wiki.Section
        header={{
          heading: (
            <>
              An Example of Intuitive <i>If...Then...</i> Logic
            </>
          ),
        }}
      >
        <Wiki.P>
          In our example, the input <strong>P</strong> is the statement{" "}
          &quot;Bob is a cat.&quot; Input <strong>Q</strong> is the statement{" "}
          &quot;Alice was feeding Bob unhealthy food&quot;. The{" "}
          <strong>Output</strong> tells us if the statement she&apos;s made is
          true or not. Let&apos;s take the first row and break it down.
        </Wiki.P>
        <Wiki.P>
          We first assign a value to <strong>P</strong>. Let&apos;s say that Bob
          is, in fact, a cat. That means that <strong>P</strong> is set to True.
        </Wiki.P>
        <table>
          <tr>
            <th className="border border-neutral-700 p-2">Input P</th>
            <th className="border border-neutral-700 p-2">Input Q</th>
            <th className="border border-neutral-700 p-2">Output</th>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
          </tr>
        </table>
        <Wiki.P>
          We then assign True to <strong>Q</strong>. This means that Alice was
          feeding Bob unhealthy food.
        </Wiki.P>
        <table>
          <tr>
            <th className="border border-neutral-700 p-2">Input P</th>
            <th className="border border-neutral-700 p-2">Input Q</th>
            <th className="border border-neutral-700 p-2">Output</th>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">True</td>
            <td className="border border-neutral-700 p-2">True</td>
          </tr>
        </table>
        <Wiki.P>
          This is where our analysis starts to diverge from formal logic, for
          the evaluation of <strong>Output</strong> is informed by context
          clues. In natural language, we intuitively make the connection that
          Alice thought that Bob was not a cat, since she is concerned that Bob
          may actually be a cat. Thus, we surmise that{" "}
          <em>Alice expects Bob to be a pet that isn&apos;t a cat</em>. Perhaps
          she expects it to be a dog, a fish, a bird or whatever. The specifics
          don&apos;t matter. What matters is that{" "}
          <em>we surmise that Alice has an expectation of what Bob is</em>. Why?{" "}
          <em>Because she didn&apos;t expect Bob to be a cat</em>.
        </Wiki.P>
        <Wiki.P>
          What does this mean? It implies that we evaluate{" "}
          <strong>Output</strong> based on <em>expectation</em> as opposed to{" "}
          <em>logic</em>. If Alice expected Bob to be a certain type of pet, be
          it a dog or whatever, we can surmise that she was feeding Bob food in
          accordance with her expectation.
        </Wiki.P>
        <Wiki.P>
          So where does that leave us? <strong>P</strong> set to True means that
          Alice&apos;s expectations were subverted. Bob is a cat.{" "}
          <strong>Q</strong> being True implies that, upon further
          investigation, the pet food Alice had been purchasing is discovered to
          be unhealthy for cats, and by extension, for Bob. Thus, we set{" "}
          <strong>Output</strong> to True. Alice should stop feeding Bob the pet
          food.
        </Wiki.P>
        <table>
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
        </table>
        <Wiki.P>
          Let&apos;s move onto the second row. We assign <strong>P</strong> to
          True again, which means that Alice&apos;s expectations were subverted.
          Bob is a cat.
        </Wiki.P>
        <table>
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
          </tr>
        </table>
        <Wiki.P>
          Now let&apos;s set <strong>Q</strong> to False. The pet food Alice had
          been giving Bob was not unhealthy for him.
        </Wiki.P>
        <table>
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
          </tr>
        </table>
        <Wiki.P>
          <strong>P</strong> set to True means that Alice&apos;s expectations
          were subverted. Bob is a cat. And <strong>Q</strong> being False
          implies that, upon further investigation, the pet food Alice had been
          purchasing is discovered to be perfectly fine for Bob. Thus, we set{" "}
          <strong>Output</strong> to False. Alice does not need to stop feeding
          Bob the pet food.
        </Wiki.P>
        <table>
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
        </table>
        <Wiki.P>
          So far, so good. Let&apos;s now move onto the third row. We start by
          assuming that Alice&apos;s concerns were misplaced - her expectation
          was not subverted. Bob is not a cat, and from the context we&apos;ve
          established before, we assume Bob is what Alice thought Bob ought to
          be. We set <strong>P</strong> to False.
        </Wiki.P>
        <table>
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
          </tr>
        </table>
        <Wiki.P>
          Now here we are obliged to assign True to <strong>Q</strong>. This
          means that Bob was being fed unhealthy food.
        </Wiki.P>
        <table>
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
          </tr>
        </table>
        <Wiki.P>
          Now here is where natural logic truly differs from formal logic. From
          the context set by the statement itself, we&apos;ve established that
          Alice had been feeding Bob according to her expectation. If{" "}
          <strong>P</strong> is False, that means{" "}
          <em>Alice&apos;s expectations were not subverted</em>. Thus, we are
          allowed to perform a{" "}
          <Wiki.A
            href={"https://en.wikipedia.org/wiki/Short-circuit_evaluation"}
          >
            <em>short-circuit evaluation</em>
          </Wiki.A>{" "}
          of the boolean expression since{" "}
          <em>
            the fact that <strong>Q</strong> is True is irrelevant
          </em>
          .
        </Wiki.P>
        <Wiki.P>
          With regards to the intuitive <i>If...Then...</i> statement, if{" "}
          <strong>P</strong> is False, then <strong>Q</strong> being True is a{" "}
          <Wiki.A href={"https://en.wikipedia.org/wiki/Don't-care_term"}>
            <em>can&apos;t happen</em>
          </Wiki.A>{" "}
          condition. Why? Because if <strong>P</strong> is False, then{" "}
          <em>no further investigation is required</em>. If Bob is what Alice
          expects Bob to be, then there is no need to investigate, since{" "}
          <em>expectations were not subverted</em>. <strong>Output</strong> is
          thus set to False, and Alice should not stop feeding Bob the pet food.
          After all, why should she? Reality, after all, aligns with her
          expectation.
        </Wiki.P>
        <table>
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
        </table>
        <Wiki.P>
          And finally, let us assume the final set of inputs. <strong>P</strong>{" "}
          is set to False, and <strong>Q</strong> is set to False. This means
          that Alice&apos;s expectations were not subverted, and the pet food is
          not unhealthy.
        </Wiki.P>
        <table>
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
          </tr>
        </table>
        <Wiki.P>
          To determine the output, we perform a short-circuit evaluation of the
          expression when <strong>P</strong> is False, and so{" "}
          <strong>Output</strong> is False. If Alice&apos;s expectations were
          not subverted, she does not need to stop doing what she was doing.
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Intuitive <i>If...Then...</i> Truth Table
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
          heading: (
            <>
              The Vacuously True Nature of the Formal <i>IF...THEN...</i>
            </>
          ),
        }}
      >
        <Wiki.P>
          I will not go into too much detail as to why the formal{" "}
          <i>IF...THEN...</i> statement is formulated as it is, but suffice to
          say, it is necessary for the functioning of formal logic that{" "}
          <strong>Output</strong> is evaluated without the aid of context. This
          means that if <strong>P</strong> is False, then the statement implies
          nothing. And if nothing is implied, then it is impossible for{" "}
          <strong>Q</strong> to contradict this non-existent premise. There does
          not exist a statement <strong>Q</strong> that can accomplish such a
          task. Thus, when <strong>P</strong> is False, <strong>Output</strong>{" "}
          must necessarily be True. The truth table for the formal{" "}
          <i>IF...THEN...</i> is recreated below, with the two differences
          highlighted to show its &quot;vacuously true&quot; nature.
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
            <td className="border border-neutral-700 p-2">
              <strong>True</strong>
            </td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">
              <strong>True</strong>
            </td>
          </tr>
        </table>
      </Wiki.Section>
      <Wiki.Section
        header={{ heading: <>Comparing Formal and Intuitive Logic</> }}
      >
        <Wiki.P>
          The difference between formal and intuitive logic is that intuitive
          logic allows one to infer context and make heuristic deductions from
          it, whereas formal logic disallows the inference of context. In
          intuitive logic, we assume that if expectations were not subverted,
          then no action is necessary. Formal logic informs us that there is no
          good reason to think that our expectations were correct in the first
          place, so we must consider <em>all</em> possibilities to uncover the
          truth. These are profoundly different modes of thinking, and it would
          be foolish for us to say that the formal <i>IF...THEN...</i> statement
          is the direct translation of the natural <i>If...Then...</i>{" "}
          statement, like we claimed to be the case for <i>AND</i> with{" "}
          <i>And</i> as well as <i>OR</i> / <i>XOR</i> with <i>Or</i>.
        </Wiki.P>
        <Wiki.P>
          One can see that the other formal hypothetical,{" "}
          <i>...IF AND ONLY IF...</i> (or <i>...IFF...</i>), does not correspond
          directly to the intuitive <i>If...Then...</i> either. It is
          constructed as follows:
        </Wiki.P>
        <Wiki.P>
          <i>P IFF Q := (IF P THEN Q) AND (IF Q THEN P)</i>
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Formal <i>...IFF...</i> Truth Table
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
        <Wiki.P>
          In fact, perhaps unintuitively, it is the formal <i>AND</i> statement
          which directly corresponds to our intuitive <i>If...Then...</i>{" "}
          statement:
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Formal <i>...AND...</i> Truth Table
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
        <Wiki.P>
          And, shockingly, when we examine our intuition of what the <i>And</i>{" "}
          expression should evaluate to, we reach the same conclusion.
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Intuitive <i>...And...</i> Truth Table
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
        <Wiki.P>What on Earth is going on here?</Wiki.P>
      </Wiki.Section>
      <Wiki.Section header={{ heading: <>The Paradox of Natural Language</> }}>
        <Wiki.P>
          Our intuitive <i>If...Then...</i> feels dramatically different from
          our intuitive <i>And</i> statement, for they serve vastly different
          functions in natural language. There is never a case where one would
          mistakenly confuse the <i>And</i> operation with the{" "}
          <i>If...Then...</i> operation. How then do they evaluate to the same
          boolean output?
        </Wiki.P>
        <Wiki.P>
          There must be some distinguishing factor, something that we&apos;ve
          been missing that explains this phenomenon. We know,{" "}
          <em>intuitively</em>, that <i>If...Then...</i> and <i>And</i> are
          different. What could the difference be? Perhaps we are looking in the
          wrong place. Perhaps intuitive logic is no real logic at all. Perhaps
          its purpose is not in evaluating the truth of statements, but of
          something else entirely. But natural langauge <em>feels</em> relevant.
          It <em>feels</em> useful. We must, then, look for other forms of
          rational thought in order to explain the nature of natural language.
          The intuitive <i>If...Then...</i> statement is expressing something,
          but what?
        </Wiki.P>
        <Wiki.P>
          Some may question why any of this matters. Who cares if the basic
          building blocks of formal logic match the basic building blocks of
          natural language? One is rational, and the other is heuristic. One is
          precise, the other is quick. One is a serious endeavor, and the other
          is mere idleness. Who cares?
        </Wiki.P>
        <Wiki.P>
          Well, let&apos;s ignore the nay-sayers and pursue our intuition
          regardless. Let&apos;s look in other, more practical places, where
          logic is necessary, but only as applied to specific purposes. Natural
          language is a deeply practical phenomenon, so perhaps we will find
          answers if we fish around in other, more practical, streams than
          formal logic.
        </Wiki.P>
      </Wiki.Section>
      <Wiki.Section
        header={{ heading: <>The Practical Applications of Logic</> }}
      >
        <Wiki.P>
          Software engineering and computer science are perhaps{" "}
          <em>the most fruitful</em> applications of logic to a practical
          endeavor. These are places where the rubber of formal logic meets the
          road of reality. It is precise, rational, and serious, like formal
          logic is. Idleness or lack of attention to detail in these endeavors
          result in{" "}
          <Wiki.A href={"https://en.wikipedia.org/wiki/Spaghetti_code"}>
            spaghetti code
          </Wiki.A>
          , or worse,{" "}
          <Wiki.A
            href={
              "https://en.wikipedia.org/w/index.php?title=Correctness_(computer_science)"
            }
          >
            incorrectness
          </Wiki.A>
          .
        </Wiki.P>
        <Wiki.P>
          Fortunately for our investigation, most programming languages have the
          concept of the &quot;If...Then...&quot; statement. What&apos;s even
          more fortunate is that, in general, this &quot;conditional&quot;
          statement has been interpreted to mean the same thing for more than 60
          years. Ever since Algol 60 introduced it, the structured
          &quot;if&quot; statement has been implemented in a consistent, uniform
          manner, and serves as a foundational building block of programming
          languages. It is so standard and ubiquitous that one can not simply
          neglect the conditional statement when coding in modern languages. We
          now turn our attention towards investigating the{" "}
          <Wiki.A
            href={
              "https://en.wikipedia.org/wiki/Conditional_(computer_programming)"
            }
          >
            conditional statement
          </Wiki.A>
          .
        </Wiki.P>
      </Wiki.Section>
      <Wiki.Section
        header={{
          heading: <>The Intuitive Nature of the Conditional Statement</>,
        }}
      >
        <Wiki.P>
          The conditional statement of computer science is intuitive and
          ubiquitous. It is not really a logic statement as much as it is a
          control flow statement. In effect, it says &quot;<em>If</em> some
          condition is True, <em>then</em> execute some task.&quot; We can,
          however, easily come up with a boolean equivalent to this control-flow
          concept, under the guise of a truth table. (If you want to research
          this idea, the closest concept I could find is the{" "}
          <Wiki.A href={"https://en.wikipedia.org/wiki/Trace_table"}>
            trace table
          </Wiki.A>
          ). It would mirror the logical truth table in having two inputs as
          well as one output. We interpret <strong>P</strong> as the truth value
          of the condition, and <strong>Q</strong> as the &quot;
          <Wiki.A
            href={"https://developer.mozilla.org/en-US/docs/Glossary/Truthy"}
          >
            truthiness
          </Wiki.A>
          &quot; of the task itself. The output <strong>O</strong> is truth
          value of the conditional itself.
        </Wiki.P>
        <Wiki.P>
          Now, the truthiness of a task is a rather ambiguous expression, so
          let&apos;s define it. A task <strong>Q</strong> can be seen as True if
          its return value is True. After completing a task, let&apos;s say of
          investigating whether some kind of pet food is healthy for cats or
          not, we return our finding as the truthiness of the task - in this
          case, True or False.
        </Wiki.P>
        <Wiki.P>
          Upon examination, there is only one combination of inputs to this
          boolean equation definitively evaluates to True - when both the inputs{" "}
          <strong>P</strong> and <strong>Q</strong> are True. If{" "}
          <strong>P</strong> is False, the control flow logic is required to
          skip over the task. If <strong>Q</strong> is False, the task can not,
          by definition, be executed. If we assume that there exists a default
          value (or an expected value) of our object of interest, then this
          exactly corresponds with the intuitive <i>If...Then...</i> statement.
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Conditional Statement Truth Table
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
            <td className="border border-neutral-700 p-2">Default</td>
          </tr>
          <tr>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">False</td>
            <td className="border border-neutral-700 p-2">Default</td>
          </tr>
        </table>
        <Wiki.P>
          This behavior is precisely the short-circuit evaluation we had
          observed in our intuitive <i>If...Then...</i> statement. Our default
          was False then, because through the context of the statement, we
          surmised that Alice had expectations of what Bob would be, and would
          not contradict those expectations when feeding Bob.
        </Wiki.P>
      </Wiki.Section>
      <Wiki.Section
        header={{
          heading: (
            <>
              Reexamining the Intuitive <i>If...Then...</i> Example
            </>
          ),
        }}
      >
        <Wiki.P>
          We now have the spark of a new insight. Perhaps intuitive logic should
          not be considered as a method of evaluating the truth of statements.
          Instead, its purpose is to make decisions. It should not even be
          termed &quot;logic&quot; at all - it is, in fact,{" "}
          <em>Intuitive Control Flow</em>. Natural language, under this
          assumption, is not the realm of truth-evaluation, but of
          decision-evaluation. It may need boolean operators, such as <i>AND</i>
          , <i>OR</i>, <i>XOR</i>, and <i>NOT</i>, in order to evaluate the
          conditions of control flow expressions, but when dealing with
          intuitive expressions, it is far more fruitful to view most other
          natural language expressions as control flow operations as opposed to
          logical truth operations.
        </Wiki.P>
        <Wiki.P>
          Let&apos;s re-examine the example we posited before - &quot;If Bob is
          a cat, then Alice was feeding him unhealthy food this whole
          time.&quot; This may seem like a hypothetical as opposed to a
          conditional, but really it isn&apos;t. This is a conditional hiding as
          a hypothetical, since beneath the covers of this natural language
          expression, there is a task implied by it. The control flow logic is
          specified below:
        </Wiki.P>
        <Wiki.P>
          <pre>{`EXPECT (isFoodUnhealthyForBob is False)
If (Bob is a cat) Then {
  isFoodUnhealthyForBob = (Investigate Bob's food)
}
RETURN isFoodUnhealthyForBob
`}</pre>
        </Wiki.P>
        <Wiki.P>
          We&apos;ll explain why this formulation exactly matches how we
          evaluated the output of Alice&apos;s statement initially.{" "}
          <strong>isFoodUnhealthyForBob</strong> is the boolean value of what we
          are concerned with - namely, that the pet food is unhealthy for Bob.
          Given the context, we surmise that Alice has an expectation of what
          Bob ought to be. Because of this, we can assume that she had been
          feeding him food appropriate to her expectation. This is reflected by
          initially setting <strong>isFoodUnhealthyForBob</strong> to False.
        </Wiki.P>
        <Wiki.P>
          We then evaluate whether Bob is a cat. If it is False, then
          Alice&apos;s expectations were not subverted, and we may simply assume
          that reality matches her expectation. We &quot;return&quot;, or exit,
          from the control flow statement without investigating whether
          Bob&apos;s food was healthy or not, leaving our default assumptions
          intact, as defined through the context of the statement itself. This
          is equivalent to the short-circuit evaluation we performed earlier
          when the first input <strong>P</strong> was False.
        </Wiki.P>
        <Wiki.P>
          If Bob is actually a cat, then Alice&apos;s expectations were
          subverted. She then needs to evaluate whether Bob&apos;s food was
          healthy or not, and investigate Bob&apos;s food accordingly. If
          Bob&apos;s food happens to be fine for cats, then great.{" "}
          <strong>isFoodUnhealthyForBob</strong> remains False, and we return
          from the control-flow statement. However, if it isn&apos;t fine for
          cats, then <strong>isFoodUnhealthyForBob</strong> must be True. We
          thus wind up with the same exact structure of an intuitive{" "}
          <i>If...Then...</i> statement from a conditional. The natural
          if...then... statement is a conditional, not a hypothetical.
        </Wiki.P>
      </Wiki.Section>
      <Wiki.Section
        header={{
          heading: (
            <>
              The Intuitive <i>If...Then...</i> as a Rational Decision
            </>
          ),
        }}
      >
        <Wiki.P>
          You may be wondering why we went through such a long journey to
          discuss the seemingly simple difference between conditionals and
          hypotheticals. The answer is that I wished to drive the point that
          natural language is entirely rational. Its rationality is not to be
          found in truth, but in decision-making. It is precise and methodical,
          but not useful for discovering truth. The intuitive{" "}
          <i>If...Then...</i> is but one way to illuminate this fact.
        </Wiki.P>
        <Wiki.P>
          And I also wish to suggest a second point. That logic is entirely
          insufficient in making rational decisions. The reason why logic does
          not match our natural language constructs is because logical truth,
          beyond the simple computation of boolean expressions, is not necessary
          for making rational decisions. Rational decisions welcomes
          context&apos;s role in coming to conclusions, whereas logic cannot.
          That is why, by default, natural language does not hypothesize very
          much. It rationalizes.
        </Wiki.P>
      </Wiki.Section>
      <Wiki.Section
        header={{ heading: <>The Bifurcation of Rational Thought</> }}
      >
        <Wiki.P>
          If what is proposed here is correct, then there are two modes of
          rational thought. One associated with fundamental truth, and one
          associated with executive decision-making. One is represented by
          formal logic, and the other by natural language. One seems to be
          artificial, the other intuitive.
        </Wiki.P>
        <Wiki.P>
          But why should fundamental truth be artificial? Sure, formal logic is
          rather stuffy, but truth is always universally held to be beautiful -
          as righteous, self-affirming, and liberating. How can this deeply
          emotional relationsip we as humans have with fundamental truth be
          anything but emotionally compelling? As, dare I say, intuitive? But
          we&apos;ve just dashed the possibility of its being founded upon
          natural language, the very inspiration, it seems, of formal logic? I
          mean, why would the formal <i>IF...THEN...</i> be called if...then...
          if it weren&apos;t inspired by natural language? If it weren&apos;t
          itself another type of more formal language?
        </Wiki.P>
        <Wiki.P>
          Truth, it seems, cannot be founded upon our capacity to make rational
          decisions. There must be a reason why the language of logic is so
          different from that of natural language - so formal, so stuffy, so
          artificial, and so difficult. But perhaps we can gain a clue from our
          discussion here. Something anomolous. Something unique about the
          formal <i>IF...THEN...</i> which differentiates it from the intuitive{" "}
          <i>If...Then...</i>? If the intuitive <i>If...Then...</i> is something
          that is evaluated on <em>expectation</em> as opposed to <em>logic</em>
          , then maybe we need something that...
        </Wiki.P>
        <Wiki.P>
          <em>Subverts our expectations.</em>
        </Wiki.P>
      </Wiki.Section>
    </Wiki.Main>
  );
}
