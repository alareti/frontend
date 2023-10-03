'use client';

import { useEffect, useState } from 'react';
import { EnumType } from 'typescript';

function inRange(x: number | number[], a: number, b: number): boolean {
  if (Array.isArray(x)) {
    return !x
      .map((x_i) => {
        return x_i >= a && x_i < b;
      })
      .includes(false);
  } else {
    return x >= a && x < b;
  }
}

function GridSVG({ position }: { position: [number, number] }) {
  const pixelsPerCell = 30;
  const numLines = 10;
  const numPixels = numLines * pixelsPerCell;

  const verticalLines = [];
  for (let x = 0; x <= numPixels; x += pixelsPerCell) {
    verticalLines.push(
      <line
        key={x}
        x1={x}
        y1={0}
        x2={x}
        y2={numPixels}
        stroke='lightblue'
        strokeWidth={1}
      />
    );
  }

  const horizontalLines = [];
  for (let y = 0; y <= numPixels; y += pixelsPerCell) {
    horizontalLines.push(
      <line
        key={y}
        x1={0}
        y1={y}
        x2={numPixels}
        y2={y}
        stroke='lightblue'
        strokeWidth={1}
      />
    );
  }

  let posBox = <></>;
  if (inRange(position, 0, numLines)) {
    posBox = (
      <rect
        x={position[0] * pixelsPerCell}
        y={position[1] * pixelsPerCell}
        width={pixelsPerCell}
        height={pixelsPerCell}
        fill='black'
      ></rect>
    );
  }

  return (
    <svg
      width={numPixels}
      height={numPixels}
      viewBox={`0 0 ${numPixels} ${numPixels}`}
      xmlns='http://www.w3.org/2000/svg'
    >
      {verticalLines}
      {horizontalLines}
      {posBox}
    </svg>
  );
}

enum Control {
  MoveUp = 'MoveUp',
  MoveLeft = 'MoveLeft',
  MoveDown = 'MoveDown',
  MoveRight = 'MoveRight',
}

enum KeyBinding {
  KeyW = 'KeyW',
  KeyA = 'KeyA',
  KeyS = 'KeyS',
  KeyD = 'KeyD',
}

function bindingFromEvent(event: KeyboardEvent) {
  for (let binding in KeyBinding) {
    if (event.code == binding) {
      return binding as KeyBinding;
    }
  }
  return null;
}

function defaultKeyBindingMap() {
  const bindingMap = new Map<Control, KeyBinding>();
  bindingMap.set(Control.MoveUp, KeyBinding.KeyW);
  bindingMap.set(Control.MoveLeft, KeyBinding.KeyA);
  bindingMap.set(Control.MoveDown, KeyBinding.KeyS);
  bindingMap.set(Control.MoveRight, KeyBinding.KeyD);
  return bindingMap;
}

export default function Index() {
  const [xy, setXY] = useState<[number, number]>([3, 1]);
  const [keyBindings, setKeyBindings] = useState(defaultKeyBindingMap());

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (bindingFromEvent(e)) {
      }
    };

    document.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('keyup', handleKeyUp, true);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('keyup', handleKeyUp, true);
    };
  }, [keyBindings]);

  const handleKeyUp = (e: KeyboardEvent) => {
    console.log(e);
  };

  return (
    <>
      <p>{JSON.stringify(xy)}</p>
      <GridSVG position={xy}></GridSVG>
    </>
  );
}
