import Link from "next/link";
import { ReactNode, createContext, useContext } from "react";
import { Url } from "next/dist/shared/lib/router/router";

const NestedLevelContext = createContext(0);
export function Article({ children }: { children: ReactNode }) {
  return (
    <NestedLevelContext.Provider value={0}>
      <article className="mx-8 my-6 max-w-3xl">{children}</article>
    </NestedLevelContext.Provider>
  );
}

export function Section({ children }: { children: ReactNode }) {
  const nestedLevel = useContext(NestedLevelContext);
  const newNestedLevel = nestedLevel + 1;

  return (
    <NestedLevelContext.Provider value={newNestedLevel}>
      <section>{children}</section>
    </NestedLevelContext.Provider>
  );
}

export function H({
  children,
  subtitle,
}: {
  children: ReactNode;
  subtitle?: string;
}) {
  const headerText = (
    <h1 className="font-serif text-5xl font-medium">{children}</h1>
  );

  const subtext = subtitle ? (
    <p className="my-2 text-neutral-400">{subtitle}</p>
  ) : (
    <></>
  );

  const hr = subtitle ? <hr className="w-20" /> : <hr className="my-2 w-20" />;

  return (
    <hgroup className="my-4">
      {headerText}
      {subtext}
      {hr}
    </hgroup>
  );
}

export function SubH({
  children,
  mainPage,
}: {
  children: ReactNode;
  mainPage?: Url;
}) {
  const nestedLevel = useContext(NestedLevelContext);

  const mainPageSubtext = mainPage ? (
    <p className="ml-8 text-neutral-400">
      <i>
        Main Page: <A href={mainPage}>{children}</A>
      </i>
    </p>
  ) : (
    <></>
  );

  switch (nestedLevel) {
    case 1: {
      return (
        <hgroup className="mb-4 mt-6">
          <h2 className="text-2xl font-bold">{children}</h2>
          {mainPageSubtext}
        </hgroup>
      );
    }
    case 2: {
      return (
        <hgroup className="mb-2 mt-4">
          <h3 className="text-xl font-bold">{children}</h3>
          {mainPageSubtext}
        </hgroup>
      );
    }
    case 3: {
      return (
        <hgroup className="mb-1 mt-2">
          <h4 className="text-lg font-bold">{children}</h4>
          {mainPageSubtext}
        </hgroup>
      );
    }
    case 4: {
      return (
        <hgroup className="mb-0.5 mt-1">
          <h5 className="text-lg font-semibold">{children}</h5>
          {mainPageSubtext}
        </hgroup>
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
    <Link href={href} className="text-sky-600">
      {children}
    </Link>
  );
}
