import {
  ReactNode,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  ReactPortal,
  JSXElementConstructor,
} from "react";

var slugify = require("slugify");

export function slugFromNode(node: ReactNode): string {
  return slugify(stringFromNode(node), {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: true, // strip special characters except replacement, defaults to `false`
    locale: "en", // language code of the locale to use
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  });
}

function stringFromNode(node: ReactNode): string {
  if (!node) return "";

  if (typeof node === "string") return node;
  if (typeof node === "number") return node.toString();
  if (typeof node === "boolean") return "";

  if (isReactNodeIterator(node)) {
    const nodeArr = Array.from(node);
    return nodeArr.map((node) => stringFromNode(node)).join("");
  }

  if (isReactPortal(node)) {
    return stringFromNode(node);
  }

  if (isReactElementWithChildren(node)) {
    const childNode = node.props.children;
    return stringFromNode(childNode);
  }

  return "";
}

function isReactPortal(node: ReactNode): node is ReactPortal {
  return isValidElement(node) && (node as ReactPortal)?.children !== undefined;
}

type WithChildren<P = unknown> = P & { children: ReactNode };
export function isReactElementWithChildren(
  node: ReactNode,
): node is ReactElement<WithChildren> {
  return (
    isValidElement<PropsWithChildren>(node) && node.props.children !== undefined
  );
}

export function isReactNodeIterator(
  node: ReactNode,
): node is Iterable<ReactNode> {
  return Symbol.iterator in Object(node);
}

export function isReactComponent<P>(
  node: ReactNode,
  comp: JSXElementConstructor<P>,
): node is ReactElement<P> {
  return isValidElement(node) && node.type === comp;
}
