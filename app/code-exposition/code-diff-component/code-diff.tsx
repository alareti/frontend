interface EditGraph<T> {
  vertices: EditGraphVertex<T>[][];
  currentIndex: [number, number];
  dimension: EditGraphDimension;
}

type EditGraphVertex<T> = [T, T] | [T] | [];

enum EditGraphDimension {
  D0,
  D1_X,
  D1_Y,
  D2,
}

function size<T>(editGraph: EditGraph<T>) {
  return [editGraph.vertices.length, editGraph.vertices[0].length];
}

function vertex<T>(editGraph: EditGraph<T>) {
  const x = editGraph.currentIndex[0];
  const y = editGraph.currentIndex[1];

  return editGraph.vertices[x][y];
}

function newEditGraph<T>(a: T[], b: T[]): EditGraph<T> {
  let vertices: EditGraphVertex<T>[][] = [];

  if (a.length > 0 && b.length > 0) {
    a.forEach((a_x, x) => {
      vertices.push([]);
      b.forEach((b_y, _y) => {
        vertices[x].push([a_x, b_y]);
      });
    });

    return {
      vertices: vertices,
      currentIndex: [-1, -1],
      dimension: EditGraphDimension.D2,
    };
  } else if (a.length > 0 && b.length == 0) {
    a.forEach((a_x, x) => {
      vertices.push([]);
      vertices[x].push([a_x]);
    });

    return {
      vertices: vertices,
      currentIndex: [-1, -1],
      dimension: EditGraphDimension.D1_X,
    };
  } else if (a.length == 0 && b.length > 0) {
    b.forEach((b_y, y) => {
      vertices.push([]);
      vertices[y].push([b_y]);
    });

    return {
      vertices: vertices,
      currentIndex: [-1, -1],
      dimension: EditGraphDimension.D1_Y,
    };
  } else {
    vertices.push([]);
    return {
      vertices: vertices,
      currentIndex: [-1, -1],
      dimension: EditGraphDimension.D0,
    };
  }
}

export function diff(str1: string, str2: string): string {
  const a = Array.from(str1);
  const b = Array.from(str2);
  let graph = newEditGraph(a, b);
  if (!graph) return '';

  console.log(vertex(graph));
  console.log(size(graph));

  return '';
}
