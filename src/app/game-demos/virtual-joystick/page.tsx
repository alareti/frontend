"use client";

import { useRef, PointerEvent, useEffect, useState } from "react";

// interface Rect {
//   x0: number;
//   y0: number;
//   width: number;
//   height: number;
// }

export default function Index() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvasDimensions, setCanvasDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [canvasContext, setCanvasContext] =
    useState<CanvasRenderingContext2D | null>(null);

  const pointerHandler = (event: PointerEvent<HTMLDivElement>) => {
    console.log(event);
  };

  useEffect(() => {
    if (!canvasRef.current) return () => {};
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");
    if (!context) return () => {};
    setCanvasContext(context);

    const resizeObserver = new ResizeObserver((entries) => {
      // There should be only one entry, since we're simply observing 'canvas'
      entries.map((entry) => {
        setCanvasDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      });
    });
    resizeObserver.observe(canvas);

    return () => {
      resizeObserver.unobserve(canvas);
    };
  }, []);

  useEffect(() => {
    console.log(canvasDimensions);
    console.log(canvasContext);
  }, [canvasDimensions, canvasContext]);

  return (
    <>
      <div
        className="relative h-[100dvh] w-[100dvw] touch-none"
        onPointerDown={pointerHandler}
        onPointerUp={pointerHandler}
        // onPointerMove={pointerHandler}
        onPointerLeave={pointerHandler}
      >
        <canvas className="absolute h-full w-full" ref={canvasRef}></canvas>
        <button
          className="absolute bottom-0 h-1/4 w-1/2 border-2 border-red-400 bg-white"
          type="button"
        ></button>
        <button
          className="absolute bottom-0 right-0 h-1/4 w-1/2 border-2 border-green-400 bg-slate-300"
          type="button"
        ></button>
      </div>
    </>
  );
}
