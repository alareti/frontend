import Link from "next/link";

export default function Index() {
  return (
    <>
      <h1>Game Demos</h1>
      <h2>Game Concept</h2>
      <p>
        The proposed game concept is a Tactical RPG that introduces an
        innovative blend of real-time and pause-enabled combat dynamics, set
        within a grid-based battlefield reminiscent of titles like XCOM. A
        standout feature of this concept is the introduction of an indirect
        command system. In this system, leadership within the group is dynamic
        and can shift based on various factors, including character attributes,
        morale, and unfolding in-game situations.
      </p>
      <p>
        Leaders can issue commands that offer substantial but temporary buffs,
        encouraging AI-controlled teammates and player alike to perform specific
        actions. However, these commands are not absolute; characters maintain
        their autonomy, deciding whether to follow issued commands based on
        their personality, relationship dynamics with the leader, and assessment
        of the battlefield. This mechanism allows for a more immersive
        experience, reflecting a realistic power dynamic and decision-making
        process within the group.
      </p>
      <p>
        Characters within the game possess distinct personalities that not only
        influence their decision-making and response to commands but also drive
        their interactions and relationships with one another. These
        relationships evolve based on actions and decisions made during
        gameplay, further impacting cooperation in combat and contributing to a
        richer, more interactive narrative. The narrative itself is deeply
        integrated with the gameplay, dynamically responding to character
        dynamics and player choices, thereby offering a coherent and engaging
        storytelling and gaming experience.
      </p>
      <p>
        The game is designed with accessibility in mind, providing a challenging
        but inclusive experience for players of all ability levels. It
        emphasizes strategic depth and player agency, allowing players to
        navigate through not only the tactical challenges presented in combat
        but also the interpersonal dynamics and narrative unfolding within their
        group of characters. With its unique command system, dynamic leadership,
        character autonomy, and integrated narrative structure, the game offers
        a novel approach to the Tactical RPG genre, promising a compelling
        experience that is both strategically deep and narratively rich.
      </p>
      <h2>List of Demos</h2>
      <ul>
        <li>
          <Link href={"game-demos/grid-movement"}>Grid Movement</Link>
        </li>
      </ul>
    </>
  );
}
