import { ReactNode } from "react";
import {
  isReactComponent,
  isReactElementWithChildren,
  isReactNodeIterator,
} from "@/src/utils/reactChildren";
import Link from "next/link";

interface Section {
  id: string;
  children: Section[];
}

function Root({ children, id }: { children?: ReactNode; id: string }) {
  const rootSection = sectionsFromRoot(children, id);

  return (
    <>
      <ContentsNav rootSection={rootSection}></ContentsNav>
      <hr />
      <h1 id={id}>{id}</h1>
      {children}
    </>
  );
}

function ContentsNav({ rootSection }: { rootSection: Section }) {
  const itemsFromSections = (sections: Section[]) => {
    return sections.map((section) => {
      const childrenListItems =
        section.children.length > 0 ? (
          <ul className="ml-4">{itemsFromSections(section.children)}</ul>
        ) : (
          <></>
        );

      return (
        <li key={section.id}>
          <Link href={"#" + section.id}>{section.id}</Link>
          {childrenListItems}
        </li>
      );
    });
  };

  return (
    <nav>
      <h2>
        <Link href={"#" + rootSection.id}>{rootSection.id}</Link>
      </h2>
      <hr />
      <ul>{itemsFromSections(rootSection.children)}</ul>
    </nav>
  );
}

function sectionsFromRoot(children: ReactNode, initId: string): Section {
  const section = { id: initId, children: [] };
  sectionsFromNode(children, section);
  return section;
}

function sectionsFromNode(node: ReactNode, section: Section): void {
  if (!node) return;
  if (typeof node === "string") return;
  if (typeof node === "number") return;
  if (typeof node === "boolean") return;

  const handleSingleNode = (node: ReactNode, section: Section) => {
    if (isReactComponent(node, Node)) {
      const childSection = { id: node.props.id, children: [] };
      section.children.push(childSection);
      sectionsFromNode(node.props.children, childSection);
    } else if (isReactElementWithChildren(node)) {
      sectionsFromNode(node.props.children, section);
    }
  };

  if (isReactNodeIterator(node)) {
    const nodeArr = Array.from(node);
    nodeArr.forEach((node) => {
      sectionsFromNode(node, section);
    });
  }

  handleSingleNode(node, section);
  return;
}

function Node({ children, id }: { children?: ReactNode; id: string }) {
  return (
    <>
      <h2 id={id}>{id}</h2>
      {children}
    </>
  );
}

export default function Index() {
  return (
    <Root id="root">
      <Node id="0">
        <Node id="0-0">
          <Node id="0-0-0"></Node>
        </Node>
      </Node>
      <div>
        <p>hey</p>
        <Node id="1"></Node>
        <Node id="2">
          <div>
            <Node id="2-0"></Node>
          </div>
        </Node>
      </div>
      <div className="h-screen w-screen"></div>
    </Root>
  );
}
