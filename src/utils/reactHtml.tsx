import { ReactNode, isValidElement, ReactHTMLElement, ReactHTML } from "react";

export type ReactHtmlTag = keyof ReactHTML;

export enum HtmlCategory {
  MainRoot,
  DocumentMetadata,
  SectioningRoot,
  ContentSectioning,
  TextContent,
  InlineText,
  Multimedia,
  Embedded,
  Scripting,
  EditDemarcating,
  TableContent,
  Forms,
  Interactive,
  WebComponents,
  React,
  Deprecated,
}

const tags: ReactHtmlTag[] = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "search",
  "slot",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "template",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "webview",
];

export function htmlTags() {
  return [...tags];
}

export function isReactHtml(
  node: ReactNode,
  htmlTags: ReactHtmlTag[] = tags,
): node is ReactHTMLElement<HTMLElement> {
  return (
    isValidElement(node) &&
    typeof node.type === "string" &&
    htmlTags.includes(node.type.toLowerCase() as ReactHtmlTag)
  );
}

export function htmlCategory(
  htmlElement: ReactHTMLElement<HTMLElement>,
): HtmlCategory {
  switch (htmlElement.type) {
    case "html":
      return HtmlCategory.MainRoot;

    case "base":
    case "head":
    case "link":
    case "meta":
    case "style":
    case "title":
      return HtmlCategory.DocumentMetadata;

    case "body":
      return HtmlCategory.SectioningRoot;

    case "address":
    case "article":
    case "aside":
    case "footer":
    case "header":
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
    case "hgroup":
    case "main":
    case "nav":
    case "section":
    case "search":
      return HtmlCategory.ContentSectioning;

    case "blockquote":
    case "dd":
    case "div":
    case "dl":
    case "dt":
    case "figcaption":
    case "figure":
    case "hr":
    case "li":
    case "menu":
    case "ol":
    case "p":
    case "pre":
    case "ul":
      return HtmlCategory.TextContent;

    case "a":
    case "abbr":
    case "b":
    case "bdi":
    case "bdo":
    case "br":
    case "cite":
    case "code":
    case "data":
    case "dfn":
    case "em":
    case "i":
    case "kbd":
    case "mark":
    case "q":
    case "rp":
    case "rt":
    case "ruby":
    case "s":
    case "samp":
    case "small":
    case "span":
    case "strong":
    case "sub":
    case "sup":
    case "time":
    case "u":
    case "var":
    case "wbr":
      return HtmlCategory.InlineText;

    case "area":
    case "audio":
    case "img":
    case "map":
    case "track":
    case "video":
      return HtmlCategory.Multimedia;

    case "embed":
    case "iframe":
    case "object":
    case "picture":
    case "source":
      return HtmlCategory.Embedded;

    case "canvas":
    case "noscript":
    case "script":
      return HtmlCategory.Scripting;

    case "del":
    case "ins":
      return HtmlCategory.EditDemarcating;

    case "caption":
    case "col":
    case "colgroup":
    case "table":
    case "tbody":
    case "td":
    case "tfoot":
    case "th":
    case "thead":
    case "tr":
      return HtmlCategory.TableContent;

    case "button":
    case "datalist":
    case "fieldset":
    case "form":
    case "input":
    case "label":
    case "legend":
    case "meter":
    case "optgroup":
    case "option":
    case "output":
    case "progress":
    case "select":
    case "textarea":
      return HtmlCategory.Forms;

    case "details":
    case "dialog":
    case "summary":
      return HtmlCategory.Interactive;

    case "slot":
    case "template":
      return HtmlCategory.WebComponents;

    case "keygen":
    case "webview":
      return HtmlCategory.React;

    case "big":
    case "center":
    case "menuitem":
    case "param":
      return HtmlCategory.Deprecated;
  }
}
