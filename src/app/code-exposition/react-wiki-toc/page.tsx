"use client";

import { ReactNode, useCallback, useState } from "react";

type NestedString = string | NestedString[];

function Root({ children }: { children: ReactNode }) {
  const [tree, setTree] = useState<NestedString[]>([]);

  const addNode = useCallback((id: string) => {}, []);

  return <></>;
}

function Node({ children, id }: { children: ReactNode; id: string }) {}

export default function Index() {
  return <></>;
}
