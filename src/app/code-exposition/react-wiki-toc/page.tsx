"use client";

import { ReactNode } from "react";

function Root({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

function Node({ children, id }: { children: ReactNode; id: string }) {
  return <>{children}</>;
}

export default function Index() {
  return (
    <Root>
      <p>intro</p>
      <Node id="hi">
        <p>hi</p>
      </Node>
    </Root>
  );
}
