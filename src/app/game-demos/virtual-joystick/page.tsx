'use client';

import { useRef, useMemo, PointerEvent, useEffect, useState } from 'react';

interface Rect {
  x0: number;
  y0: number;
  width: number;
  height: number;
}

export default function Index() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const canvasDim = useMemo(() => {
    return {
      x: 250,
      y: 500,
    };
  }, []);

  const pointerHandler = (event: PointerEvent<HTMLCanvasElement>) => {
    console.log(event);
  };

  const pointerHandlerButton = (event: PointerEvent<HTMLDivElement>) => {
    // event.preventDefault();
    console.log(event);
  };

  useEffect(() => {
    if (!canvasRef.current) return () => {};
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return () => {};
    contextRef.current = context;

    return () => {
      context.reset();
    };
  }, [canvasDim]);

  return (
    <>
      <div className='border-2 border-green-400 w-screen h-96 relative'>
        <canvas
          className='touch-none w-full h-full absolute border-2 border-purple-500 bg-slate-600'
          ref={canvasRef}

          // onPointerDown={pointerHandler}
          // onPointerUp={pointerHandler}
          // onPointerMove={pointerHandler}
          // onPointerLeave={pointerHandler}
          // width={canvasDim.x}
          // height={canvasDim.y}
        ></canvas>
        <div
          className='touch-none w-2/5 h-1/3 absolute bottom-0 border-2 border-black bg-white'
          onPointerDown={pointerHandlerButton}
          onPointerUp={pointerHandlerButton}
          onPointerMove={pointerHandlerButton}
          onPointerLeave={pointerHandlerButton}
        ></div>
      </div>
    </>
  );
}
