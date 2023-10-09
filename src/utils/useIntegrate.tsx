import { useState, useCallback, useRef } from "react";

interface Operands<S, D> {
  integral: S;
  delta: D;
}

export default function useIntegral<S, D>(
  init: S,
  operation: (integral: S, delta: D) => S,
  maxBufferLength: number = 1,
): [S, (delta: D) => void, () => void, () => Operands<S, D>[]] {
  const deltas = useRef<Operands<S, D>[]>([]);
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
      deltas.current = (() => {
        const newDelta = { integral: integral, delta: delta };
        const newDeltas =
          deltas.current.length < maxBufferLength
            ? [...deltas.current, newDelta]
            : [...deltas.current.slice(1), newDelta];
        return newDeltas;
      })();
    },
    [integrate, integral, maxBufferLength],
  );

  const removeDelta = useCallback(() => {
    deltas.current = (() => {
      if (deltas.current.length > 0) {
        const lastDelta = deltas.current[deltas.current.length - 1];
        setIntegral(lastDelta.integral);
        return deltas.current.slice(0, -1);
      } else {
        return deltas.current;
      }
    })();
  }, []);

  const getHistory = useCallback(() => {
    return [...deltas.current];
  }, []);

  return [integral, addDelta, removeDelta, getHistory];
}
