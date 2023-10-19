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
          discuss why this discrepancy is deeply troublesome, and to what extent
          formal logic, along with intuitive logic, are undermined by not
          matching each other in such fundamental constructs of communication.
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
          say &quot;<i>If</i> my dog is actually a cat, <i>then</i> the food I
          was feeding him was unhealthy,&quot; we would say that should the dog
          actually be a dog, then she was not feeding him the wrong food the
          whole time. Let us make a{" "}
          <Wiki.A href={"https://en.wikipedia.org/wiki/Truth_table"}>
            truth table
          </Wiki.A>{" "}
          to help us precisely define what we are getting at.
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
          <em>Alice&apos;s dog is a cat.</em> Input <strong>Q</strong> is the
          statement <em>The food Alice was feeding him was unhealthy</em> The{" "}
          <strong>Output</strong> tells us if the statement she&apos;s made is
          true or not. Let&apos;s take the first row and break it down.
        </Wiki.P>
        <Wiki.P>
          We first evaluate the truth of <strong>P</strong>. Let&apos;s say that
          what Alice thought was a dog is, in fact, a cat. That means that{" "}
          <strong>P</strong> is set to True.
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
          We then evaluate <strong>Q</strong>. This is where our analysis
          diverges somewhat from formal logic - for the evaluation of{" "}
          <strong>Q</strong> is informed by <strong>P</strong>. In natural
          language, we intuitively make the connection that Alice thought that
          her pet was a dog. Thus, we assume that the food she was feeding him
          was dog food. In natural language, the two inputs are not independent,
          but rather, the evaluation of <strong>Q</strong> depends on the
          context set by <strong>P</strong>. The statement we are truly trying
          to evaluate, in this case, is{" "}
          <em>dog food is unhealthy for Alice&apos;s pet</em>.{" "}
          <strong>P</strong>, in effect, gives us <em>context</em> about what{" "}
          <strong>Q</strong> means.
        </Wiki.P>
        <Wiki.P>
          So now we evaluate <strong>Q</strong>. Let&apos;s assume that, upon
          further investigation, dog food is specifically meant for dogs, and is
          harmful to all other animals. Thus, <strong>Q</strong> would be set to
          True.
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
          Is the point Alice is trying to make valid? It would seem so.
          We&apos;ve found that the dog was actually a cat, and that dog food is
          not healthy for cats. We set the output to True.
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
          Let&apos;s move onto the second row. We evaluate <strong>P</strong>{" "}
          again, and we assume like last time that what Alice thought was a dog
          is in fact a cat. So we set <strong>P</strong> to True.
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
          Now let&apos;s assume that dog food is actually perfectly fine for
          cats. <strong>Q</strong> would then be set to False.
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
          Was Alice correct in saying the food she was feeding him was
          unhealthy? No, because dog food, in this case, is perfectly fine for
          cats. We set the <strong>Output</strong> to False.
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
          assuming that Alice&apos;s pet is actually a dog, as implied by the
          context. We set <strong>P</strong> to False.
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
          We now assume that <strong>Q</strong> is True - dog food is unhealthy
          for cats.
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
          the context set by the statement itself, we&apos;ve surmised that
          Alice&apos;s pet is a dog, and that it had been fed dog food the whole
          time. The food that she had been feeding him, by definition, had{" "}
          <em>not</em> been unhealthy for him. Is not dog food meant for dogs?
          Thus, we set <strong>Output</strong> to False.
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
          is set to False, and <strong>Q</strong> is set to False. Alice&apos;s
          pet is actually a dog, and dog food is actually healthy for cats.
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
          The contextual logic we applied earlier applies here as well. It
          doesn&apos;t matter if dog food is healthy for cats or not - we are
          still feeding dog food to a dog. Thus, <strong>Output</strong> is set
          to False.
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
          say, it is necessary for the functioning of formal logic that the
          inputs <strong>P</strong> and <strong>Q</strong> are evaluated
          independently, without the aid of context to assist in deducing
          outcomes. This means that if <strong>P</strong> is false, nothing can
          be assumed about the statement itself. And if nothing is assumed, then
          it is impossible for <strong>Q</strong> to contradict a non-existent
          premise. There does not exist a statement <strong>Q</strong> that can
          accomplish such a task. Thus, when <strong>P</strong> is false,{" "}
          <strong>Output</strong> must necessarily be True. The truth table for
          the formal <i>IF...THEN...</i> is recreated below, with the two
          differences highlighted to show its &quot;vacuously true&quot; nature.
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
          intuitive logic, we assume that if what was thought to be a dog is not
          a cat, then surely it must still be a dog. Formal logic informs us
          that if what was thought to be a dog is not a cat, then it still may
          not necessarily be a dog. These are profoundly different modes of
          thinking, and it would be foolish for us to say that the formal{" "}
          <i>IF...THEN...</i> statement is the direct translation of the natural{" "}
          <i>If...Then...</i> statement, like we claimed to be the case for{" "}
          <i>AND</i> with <i>And</i> as well as <i>OR</i> / <i>XOR</i> with{" "}
          <i>Or</i>.
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
          And, shockingly, when we examine our intuition of what a natural{" "}
          <i>And</i> statement should evaluate to, we reach the same conclusion.
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
      <Wiki.Section
        header={{ heading: <>The Role of Context in Intuitive Logic</> }}
      >
        <Wiki.P>
          Our intuitive <i>If...Then...</i> feels dramatically different from
          our intuitive <i>And</i> statement, and they serve vastly different
          functions in intuitive logic. There is never a case where one would
          mistakenly confuse the <i>And</i> operator with the{" "}
          <i>If...Then...</i> operator. How then do they evaluate to the same
          boolean output?
        </Wiki.P>
        <Wiki.P>
          The difference is to what degree context plays a role in deciding the
          outcome. When someone asks, &apos;Are Anna and Bob coming?&quot; they
          imply that (unless it is common knowledge that they are a couple or
          otherwise are to be treated as one unit), each of the two statements (
          <strong>P</strong> = <em>&quot;Is Anna coming&quot;</em> and{" "}
          <strong>Q</strong> = <em>&quot;Is Bob coming&quot;</em>) are to be
          evaluated independently. The intuitive <i>And</i> is formally true,
          whereas the intuitive <i>If...Then...</i> is contextually true. And it
          is only through context do we know whether the natural language
          &quot;and&quot; is to be interpreted as a form of description of a
          logical unit (&quot;Are [Alice and Bob] coming?&quot;), or in itself
          is the logical operator <i>And</i> (&quot;Are Alice <i>And</i> Bob
          coming?).
        </Wiki.P>
        <Wiki.P>
          Why does this matter? Who cares if the basic building blocks of formal
          logic match the basic building blocks of intuitive logic? One is
          rational, and the other is heuristic. One is precise, the other is
          quick. One is a serious endeavor, and the other is mere idleness. Who
          cares?
        </Wiki.P>
      </Wiki.Section>
      <Wiki.Section
        header={{ heading: <>The Practical Applications of Logic</> }}
      >
        <Wiki.P>
          Software engineering and computer science are perhaps{" "}
          <em>the most fruitful</em> applications of logic to a practical
          endeavor. These are places where the tires of formal logic&apos;s meet
          the road of reality. It is precise, rational, and serious, like formal
          logic is. Idleness or lack of attention to detail in this endeavor
          results in{" "}
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
          . If logicians express themselves formally in thought, then surely
          they must do so in the realm of practical coding. Perhaps looking at
          how they approach &quot;If...Then...&quot; statements may shed some
          light on this discussion. We now turn our attention towards
          investigating the{" "}
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
          heading: <>The Intuitive Logic of the Conditional Statement</>,
        }}
      >
        <Wiki.P>
          The conditional statement of computer science is intuitive and
          ubiquitous. It is not really a boolean logic statement, but rather a
          control flow statement. In effect, it says &quot;<em>If</em> some
          condition is True, <em>then</em> execute some task.&quot; We can,
          however, easily come up with a boolean equivalent to this control-flow
          concept. It would have two inputs, <strong>P</strong> and{" "}
          <strong>Q</strong>, as well as one output, <strong>O</strong>. We
          interpret <strong>P</strong> as the truth value of the condition, and{" "}
          <strong>Q</strong> as the &quot;truthiness&quot; of the task itself.
          The output <strong>O</strong> is whether the task executed or not.
        </Wiki.P>
        <Wiki.P>
          Now, the truthiness of a task is a rather ambiguous expression, so
          let&apos;s define it. A task <strong>Q</strong> can be seen as True if
          it is executable. If the task is impossible, it is False. The program,
          or computer, will hang up, or die, or whatever, if the task is
          impossible. In effect, this definition of the truthiness value of a
          task is the most relevant way to define it, since it directly affects
          the output <strong>O</strong>, since <strong>O</strong> itself is
          defined as whether the task executed or not.
        </Wiki.P>
        <Wiki.P>
          Upon examination, there is only one combination of inputs to this
          boolean equation that evaluates to True - when both the inputs{" "}
          <strong>P</strong> and <strong>Q</strong> are True. If{" "}
          <strong>P</strong> is False, the task is not executed. If{" "}
          <strong>Q</strong> is False, the task is also not executed. This
          exactly corresponds to the intuitive <i>If...Then...</i> statement.
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Task Conditional Statement Truth Table
          </caption>
          <tr>
            <th className="border border-neutral-700 p-2">Input P</th>
            <th className="border border-neutral-700 p-2">Input Q</th>
            <th className="border border-neutral-700 p-2">
              O - Task Completion
            </th>
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
          There is another way to formulate the boolean expression of the
          conditional statement. <strong>P</strong> and <strong>Q</strong>{" "}
          retain their meanings, but instead of defining <strong>O</strong> as
          whether the task itself completed, we can define <strong>O</strong> as
          whether the conditional itself completed. The conditional itself would
          only fail to complete if the condition <strong>P</strong> is True and
          the task <strong>Q</strong> were impossible (False). This corresponds
          directly to the formal <i>IF...THEN...</i> statement.
        </Wiki.P>
        <table>
          <caption className="border border-neutral-700 p-2">
            The Flow Conditional Statement Truth Table
          </caption>
          <tr>
            <th className="border border-neutral-700 p-2">Input P</th>
            <th className="border border-neutral-700 p-2">Input Q</th>
            <th className="border border-neutral-700 p-2">
              O - Flow Completion
            </th>
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
          The question is, which is more useful? Is the utility of a flow
          control statement in deciding whether the statement itself is
          completed, or whether the task which it was necessary to make a
          decision upon completed? The answer is obvious - the whole point of
          flow control is to define when tasks are completed. It is taken for
          granted that the computer is competent enough to complete the flow. As
          such, the intuitive formulation of the conditional statement is simply
          a better method of making a boolean equation out of a conditional
          statement.
        </Wiki.P>
      </Wiki.Section>
    </Wiki.Main>
  );
}
