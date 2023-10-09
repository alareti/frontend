"use client";

import { ReactNode, useState } from "react";

type NestedString = string | NestedString[];

function Root({ children }: { children: ReactNode }) {
  const [tree, setTree] = useState<NestedString[]>([]);

  return <></>;
}

function Node({ children }: { children: ReactNode }) {}

export default function Index() {
  return <></>;
}
