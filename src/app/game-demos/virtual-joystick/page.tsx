function joystickSvg(radiusPixels: number, strokeStrength: number) {
  const r = radiusPixels;
  const diag = 0.5 * Math.SQRT2 * r;
  const corners = [
    [diag, diag],
    [-diag, diag],
    [-diag, -diag],
    [diag, -diag],
  ];

  const paths = corners
    .map((xy, i, corners) => {
      const xyNext = corners[(i + 1) % corners.length];
      const x0 = xy[0];
      const y0 = xy[1];
      const x1 = xyNext[0];
      const y1 = xyNext[1];
      return `M 0 0 L ${x0} ${y0} A ${r} ${r} 0 0 1 ${x1} ${y1} Z`;
    })
    .map((d, i) => {
      switch (i) {
        case 0: {
          return (
            <path
              d={d}
              stroke='black'
              strokeWidth={strokeStrength}
              fill='green'
              fillOpacity={0.5}
            ></path>
          );
        }
        case 1: {
          return (
            <path
              d={d}
              stroke='black'
              strokeWidth={strokeStrength}
              fill='red'
              fillOpacity={0.5}
            ></path>
          );
        }
        case 2: {
          return (
            <path
              d={d}
              stroke='black'
              strokeWidth={strokeStrength}
              fill='blue'
              fillOpacity={0.5}
            ></path>
          );
        }
        case 3: {
          return (
            <path
              d={d}
              stroke='black'
              strokeWidth={strokeStrength}
              fill='yellow'
              fillOpacity={0.5}
            ></path>
          );
        }
        default: {
          return (
            <path
              d={''}
              stroke='transparent'
              strokeWidth={strokeStrength}
              fill='transparent'
            ></path>
          );
        }
      }
    });
  console.log(paths);

  return (
    <svg
      width={4 * r}
      height={4 * r}
      viewBox={`${-2 * r} ${-2 * r} ${4 * r} ${4 * r}`}
      xmlns='http://www.w3.org/2000/svg'
    >
      {paths}
    </svg>
  );
}

export default function Index() {
  return <>{joystickSvg(80, 2)}</>;
}
