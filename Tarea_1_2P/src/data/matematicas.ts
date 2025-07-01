export type Matriz3x3 = number[][];
export type Vector3 = number[];

export function determinante3x3(m: Matriz3x3): number {
  return (
    m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) -
    m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) +
    m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0])
  );
}

export function reemplazarColumna(m: Matriz3x3, columna: number, vector: Vector3): Matriz3x3 {
  return m.map((fila, i) => fila.map((val, j) => (j === columna ? vector[i] : val)));
}

export function resolverCramer(matriz: Matriz3x3, vector: Vector3): { x: number; y: number; z: number } | null {
  const det = determinante3x3(matriz);

  if (det === 0) {
    return null;
  }

  const dx = determinante3x3(reemplazarColumna(matriz, 0, vector));
  const dy = determinante3x3(reemplazarColumna(matriz, 1, vector));
  const dz = determinante3x3(reemplazarColumna(matriz, 2, vector));

  return {
    x: dx / det,
    y: dy / det,
    z: dz / det,
  };
}
