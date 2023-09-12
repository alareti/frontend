interface EditGraph<T> {
  vertices: EditGraphVertex<T>[][];
  currentIndex: [number, number];
}

type EditGraphVertex<T> = [T, T];

function horizontalEdge() {}

function editGraph<T>(a: T[], b: T[]) {
  let vertices: EditGraphVertex<T>[][] = [];

  a.forEach((a_x, x) => {
    vertices.push([]);
    b.forEach((b_y, _y) => {
      vertices[x].push([a_x, b_y]);
    });
  });

  console.log(vertices);
}

export function diff(str1: string, str2: string): string {
  const a = Array.from(str1);
  const b = Array.from(str2);
  editGraph(a, b);

  return '';
}
