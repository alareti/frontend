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
  console.log(treeFromNode(children));

  return <>{children}</>;
}

type NestedTree<T> = null | T | NestedTree<T>[];
function treeFromNode(node: ReactNode): NestedTree<string> {
  if (!node) return null;
  if (typeof node === "string") return null;
  if (typeof node === "number") return null;
  if (typeof node === "boolean") return null;

  if (isReactNodeIterator(node)) {
    const nodeArr = Array.from(node);
    const treeArr = nodeArr.map((node) => {
      const childTree = treeFromNode(node);
      return childTree;
    });
    return treeArr;
  }

  if (!isComponent(node, Node)) {
    if (isReactElementWithChildren(node)) {
      const childTree = treeFromNode(node.props.children);
      return childTree;
    } else {
      return null;
    }
  }

  if (isComponent(node, Node)) {
    if (isReactElementWithChildren(node)) {
      const childTree = treeFromNode(node.props.children);
      return [node.props.id, childTree];
    } else {
      return node.props.id;
    }
  }

  return null;
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
      <Node id="1"></Node>
      <div>
        <Node id="2"></Node>
        <Node id="3"></Node>
      </div>
    </Root>
  );
}
