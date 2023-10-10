import {
  JSXElementConstructor,
  ReactNode,
  ReactElement,
  isValidElement,
} from "react";
import {
  isReactElementWithChildren,
  isReactNodeIterator,
} from "@/src/utils/reactChildren";

function Root({ children }: { children?: ReactNode }) {
  console.log(JSON.stringify(sectionsFromRoot(children), null, "  "));

  return (
    <>
      <h1>Root</h1>
      {children}
    </>
  );
}

interface Section {
  id: string;
  children: Section[];
}

function sectionsFromRoot(children: ReactNode): Section {
  const section = { id: "root", children: [] };
  sectionsFromNode(children, section);
  return section;
}

function sectionsFromNode(node: ReactNode, section: Section): void {
  if (!node) return;
  if (typeof node === "string") return;
  if (typeof node === "number") return;
  if (typeof node === "boolean") return;

  const handleSingleNode = (node: ReactNode, section: Section) => {
    if (isComponent(node, Node) && !isReactElementWithChildren(node)) {
      section.children.push({ id: node.props.id, children: [] });
    } else if (isComponent(node, Node) && isReactElementWithChildren(node)) {
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
      handleSingleNode(node, section);
    });
  }

  handleSingleNode(node, section);
  return;
}

function isComponent<P>(
  node: ReactNode,
  comp: JSXElementConstructor<P>,
): node is ReactElement<P> {
  return isValidElement(node) && node.type === comp;
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
    <Root>
      <Node id="0">
        <Node id="0-0"></Node>
      </Node>
      <div>
        <hr />
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
