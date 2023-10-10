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
  const section = { id: "root", children: [] };
  sectionsFromNode(children, section);
  console.log(section);

  return <>{children}</>;
}

// type NestedTree<T> = null | T | NestedTree<T>[];
interface Section {
  id: string;
  children: Section[];
}

function sectionsFromNode(node: ReactNode, section: Section): void {
  if (!node) return;
  if (typeof node === "string") return;
  if (typeof node === "number") return;
  if (typeof node === "boolean") return;

  if (isReactNodeIterator(node)) {
    const nodeArr = Array.from(node);

    nodeArr.forEach((node) => {
      if (isComponent(node, Node) && !isReactElementWithChildren(node)) {
      } else if (isComponent(node, Node) && isReactElementWithChildren(node)) {
      } else if (isReactElementWithChildren(node)) {
      }
    });
  }

  if (isComponent(node, Node) && !isReactElementWithChildren(node)) {
  }

  return;
}

function isComponent<P>(
  node: ReactNode,
  comp: JSXElementConstructor<P>,
): node is ReactElement<P> {
  return isValidElement(node) && node.type === comp;
}

function Node({ children, id }: { children?: ReactNode; id: string }) {
  return <>{children}</>;
}

export default function Index() {
  return (
    <Root>
      <Node id="0"></Node>
      <div>
        <Node id="1"></Node>
        <Node id="2"></Node>
      </div>
    </Root>
  );
}
