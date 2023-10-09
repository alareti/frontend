"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
} from "react";
import useIntegral from "@/src/utils/useIntegral";

interface FlatTreeNode {
  data: string;
  location: number[];
}

const LocationContext = createContext<number[]>([]);
const AddNodeContext = createContext<(delta: FlatTreeNode) => void>(
  (delta: FlatTreeNode) => {},
);

function Root({ children }: { children: ReactNode }) {
  const integrateNode = useCallback(
    (integral: FlatTreeNode[], delta: FlatTreeNode) => {
      console.log("Integrating");
      return [...integral, delta];
    },
    [],
  );

  const [flatTree, addNode] = useIntegral<FlatTreeNode[], FlatTreeNode>(
    [],
    integrateNode,
  );

  return (
    <AddNodeContext.Provider value={addNode}>
      {children}
    </AddNodeContext.Provider>
  );
}

function Node({ children, id }: { children: ReactNode; id: string }) {
  const addNode = useContext(AddNodeContext);

  // useEffect(() => {
  //   addNode({
  //     data: id,
  //     location: [],
  //   });
  // }, [addNode, id]);

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
