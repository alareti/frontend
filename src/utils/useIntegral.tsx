import { useState, useCallback } from "react";

export default function useIntegral<S, D>(
  init: S,
  operation: (integral: S, delta: D) => S,
): [S, (delta: D) => void] {
  const [integral, setIntegral] = useState(init);

  const integrate = useCallback(
    (delta: D) => {
      setIntegral((integral) => {
        return operation(integral, delta);
      });
    },
    [operation],
  );

  const addDelta = useCallback(
    (delta: D) => {
      integrate(delta);
    },
    [integrate],
  );

  return [integral, addDelta];
}
