import { useState } from "react";
import { resolverCramer, determinante3x3 } from "../data/matematicas";

export const SistemaEcuaciones3x3 = () => {
  const [coeficientes, setCoeficientes] = useState<number[][]>(
    Array(3).fill(null).map(() => Array(3).fill(0))
  );
  const [terminos, setTerminos] = useState<number[]>([0, 0, 0]);
  const [resultado, setResultado] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const actualizarCoeficiente = (fila: number, col: number, valor: string) => {
    const nuevo = [...coeficientes];
    nuevo[fila][col] = Number(valor);
    setCoeficientes(nuevo);
  };

  const actualizarTermino = (fila: number, valor: string) => {
    const nuevo = [...terminos];
    nuevo[fila] = Number(valor);
    setTerminos(nuevo);
  };

  const resolver = () => {
    const vacios = coeficientes.flat().some(isNaN) || terminos.some(isNaN);
    if (vacios) {
      setError("Todos los campos deben ser números.");
      setResultado(null);
      return;
    }

    const det = determinante3x3(coeficientes);
    if (det === 0) {
      setError("Matriz singular: El sistema no tiene solución única.");
      setResultado(null);
      return;
    }

    const sol = resolverCramer(coeficientes, terminos);
    setError(null);
    setResultado(`x = ${sol!.x.toFixed(2)}, y = ${sol!.y.toFixed(2)}, z = ${sol!.z.toFixed(2)}`);
  };

  return (
    <div className="container">
      <h1>Resolución de Sistema de Ecuaciones 3x3</h1>
      <p>Ingrese los coeficientes de la matriz A y el vector B:</p>

      <table>
        <tbody>
          {[0, 1, 2].map((i) => (
            <tr key={i}>
              {[0, 1, 2].map((j) => (
                <td key={j}>
                  <input
                    type="number"
                    value={coeficientes[i][j]}
                    onChange={(e) => actualizarCoeficiente(i, j, e.target.value)}
                    style={{ width: "60px" }}
                  />
                </td>
              ))}
              <td>
                =
              </td>
              <td>
                <input
                  type="number"
                  value={terminos[i]}
                  onChange={(e) => actualizarTermino(i, e.target.value)}
                  style={{ width: "60px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={resolver} style={{ marginTop: "10px" }}>Resolver</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {resultado && <p><strong>Resultado:</strong> {resultado}</p>}
    </div>
  );
};
