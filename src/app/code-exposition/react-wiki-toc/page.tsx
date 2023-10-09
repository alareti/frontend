"use client";

import { ReactNode, useCallback } from "react";
import useIntegral from "@/src/utils/useIntegral";

interface FlatTreeNode {
  data: string;
  location: number[];
}

function Root({ children }: { children: ReactNode }) {
  const integrateNode = useCallback(
    (integral: FlatTreeNode[], delta: FlatTreeNode) => {
      return [...integral, delta];
    },
    [],
  );

  const [flatTree, addNode] = useIntegral<FlatTreeNode[], FlatTreeNode>(
    [],
    integrateNode,
  );

  return <>{}</>;
}

function Node({
  children,
  id,
  location,
}: {
  children: ReactNode;
  id: string;
  location: number[];
}) {}

export default function Index() {
  return <></>;
}
