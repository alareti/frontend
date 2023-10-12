import Link from "next/link";
import { ReactNode, createContext, useContext } from "react";
import { Url } from "next/dist/shared/lib/router/router";
import {
  isReactComponent,
  isReactElementWithChildren,
  isReactNodeIterator,
  slugFromNode,
} from "../utils/reactChildren";

interface LinkData {
  href: Url;
  name: JSX.Element;
}

interface Header {
  heading: JSX.Element;
  uriFragment: LinkData;
}

const NestedLevelContext = createContext(0);
export function Main({
  children,
  title,
  subtitle,
  className,
}: {
  children: ReactNode;
  title: JSX.Element;
  subtitle?: JSX.Element;
  className?: string;
}) {
  const initHeader = {
    heading: title,
  };
  // const rootSection = sectionsFromRoot(children);

  return (
    <main className={"flex justify-center " + className}>
      <Article
        className="mx-8 my-6 max-w-3xl"
        title={title}
        subtitle={subtitle}
      >
        {children}
      </Article>
    </main>
  );
}

interface SectionData {
  data: Header;
  children: SectionData[];
}

function sectionsFromRoot(
  children: ReactNode,
  initHeader: Header,
): SectionData {
  const section = { data: initHeader, children: [] };
  sectionsFromNode(children, section);
  return section;
}

function sectionsFromNode(node: ReactNode, sectionData: SectionData): void {
  if (!node) return;
  if (typeof node === "string") return;
  if (typeof node === "number") return;
  if (typeof node === "boolean") return;

  if (isReactNodeIterator(node)) {
    const nodeArr = Array.from(node);
    nodeArr.forEach((node) => {
      sectionsFromNode(node, sectionData);
    });
  }

  // if (isReactComponent(node, Section) && node.props.header) {
  //   const childSectionData = { data: node.props.header, children: [] };
  //   sectionData.children.push(childSectionData);
  //   sectionsFromNode(node.props.children, childSectionData);
  // } else if (isReactElementWithChildren(node)) {
  //   sectionsFromNode(node.props.children, sectionData);
  // }

  return;
}

function Article({
  children,
  className,
  title,
  subtitle,
}: {
  children: ReactNode;
  className?: string;
  title: JSX.Element;
  subtitle?: JSX.Element;
}) {
  return (
    <NestedLevelContext.Provider value={0}>
      <article className={"text-lg " + className}>
        <H subtitle={subtitle}>{title}</H>
        {children}
      </article>
    </NestedLevelContext.Provider>
  );
}

export function Section({
  children,
  header,
}: {
  children: ReactNode;
  header?: {
    heading: JSX.Element;
    mainPage?: LinkData;
  };
}) {
  const nestedLevel = useContext(NestedLevelContext);
  const newNestedLevel = nestedLevel + 1;

  const subHeader = header ? (
    <SubH mainPage={header.mainPage}>{header.heading}</SubH>
  ) : (
    <></>
  );

  return (
    <NestedLevelContext.Provider value={newNestedLevel}>
      <section>
        {subHeader}
        {children}
      </section>
    </NestedLevelContext.Provider>
  );
}

function H({
  children,
  subtitle,
}: {
  children: ReactNode;
  subtitle?: JSX.Element;
}) {
  const headerText = (
    <h1 className="font-serif text-5xl font-medium">{children}</h1>
  );

  const subtext = subtitle ? (
    <p className="my-2 text-neutral-500">{subtitle}</p>
  ) : (
    <></>
  );

  const hr = subtitle ? <hr className="w-20" /> : <hr className="my-2 w-20" />;

  return (
    <header className="my-4">
      {headerText}
      {subtext}
      {hr}
    </header>
  );
}

function SubH({
  children,
  mainPage,
}: {
  children: ReactNode;
  mainPage?: LinkData;
}) {
  const nestedLevel = useContext(NestedLevelContext);
  const slug = slugFromNode(children);

  const mainPageSubtext = mainPage ? (
    <p className="ml-8 italic text-neutral-500">
      Main Page: <A href={mainPage.href}>{mainPage.name}</A>
    </p>
  ) : (
    <></>
  );

  switch (nestedLevel) {
    case 1: {
      return (
        <header id={slug} className="mb-4 mt-6">
          <h2 className="text-2xl font-bold">{children}</h2>
          {mainPageSubtext}
        </header>
      );
    }
    case 2: {
      return (
        <header id={slug} className="mb-2 mt-4">
          <h3 className="text-xl font-bold">{children}</h3>
          {mainPageSubtext}
        </header>
      );
    }
    case 3: {
      return (
        <header id={slug} className="mb-1 mt-2">
          <h4 className="text-lg font-bold">{children}</h4>
          {mainPageSubtext}
        </header>
      );
    }
    case 4: {
      return (
        <header id={slug} className="mb-0.5 mt-1">
          <h5 className="text-lg font-semibold">{children}</h5>
          {mainPageSubtext}
        </header>
      );
    }
    default: {
      return <></>;
    }
  }
}

export function P({ children }: { children: ReactNode }) {
  const nestedLevel = useContext(NestedLevelContext);

  const my = (() => {
    switch (nestedLevel) {
      case 1: {
        return "my-4";
      }
      case 2: {
        return "my-2";
      }
      case 3: {
        return "my-1";
      }
      case 4: {
        return "my-0.5";
      }
      default: {
        return "";
      }
    }
  })();

  return <p className={my}>{children}</p>;
}

export function A({ children, href }: { children: ReactNode; href: Url }) {
  return (
    <Link
      href={href}
      className="rounded text-blue-600 transition-colors duration-200 hover:text-blue-800 focus:outline-none focus:ring focus:ring-blue-300"
    >
      {children}
    </Link>
  );
}
