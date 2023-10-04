'use client';

import { useRef, PointerEvent, useEffect, useState } from 'react';

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

    const context = canvas.getContext('2d');
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
        className='border-2 border-green-400 w-[100dvw] h-[100dvh] relative'
        onPointerDown={pointerHandler}
        onPointerUp={pointerHandler}
        // onPointerMove={pointerHandler}
        onPointerLeave={pointerHandler}
      >
        <canvas
          className='w-full h-full absolute border-2 border-purple-500 bg-slate-600'
          ref={canvasRef}
        ></canvas>
        <button
          className='w-1/2 h-1/4 absolute bottom-0 border-2 border-black bg-white'
          type='button'
        ></button>
      </div>
    </>
  );
}
