import { useState } from "react";
import {
  parseInput,
  calcularMedia,
  calcularMediana,
  calcularModa,
  calcularVarianzaMuestral,
  calcularVarianzaPoblacional,
  calcularDesviacionEstandarMuestral,
  calcularDesviacionEstandarPoblacional,
  calcularRango,
  calcularMinimo,
  calcularMaximo,
} from "../data/estadisticas";

export const CalculadoraEstadistica = () => {
  const [input, setInput] = useState("");
  const [resultados, setResultados] = useState<string[]>([]);
  const [error, setError] = useState("");

  const calcular = () => {
  const numeros = parseInput(input);

  if (numeros.length < 2) {
    setError("Ingrese al menos 2 valores numéricos.");
    setResultados([]);
    return;
  }

  setError("");
  const moda = calcularModa(numeros);
  const res = [
    `Media: ${calcularMedia(numeros).toFixed(2)}`,
    `Mediana: ${calcularMediana(numeros)}`,
    `Moda: ${moda.length > 0 ? moda.join(", ") : "Sin moda"}`,
    `Varianza muestral: ${calcularVarianzaMuestral(numeros).toFixed(2)}`,
    `Varianza poblacional: ${calcularVarianzaPoblacional(numeros).toFixed(2)}`,
    `Desviación estándar muestral: ${calcularDesviacionEstandarMuestral(numeros).toFixed(2)}`,
    `Desviación estándar poblacional: ${calcularDesviacionEstandarPoblacional(numeros).toFixed(2)}`,
    `Rango: ${calcularRango(numeros)}`,
    `Mínimo: ${calcularMinimo(numeros)}`,
    `Máximo: ${calcularMaximo(numeros)}`
  ];
  setResultados(res);
};


  const limpiar = () => {
    setInput("");
    setResultados([]);
    setError("");
  };

  return (
    <div className="container">
      <h1>Cálculos Estadísticos</h1>

      <textarea
        rows={5}
        cols={40}
        placeholder="Ingresa números separados por comas, espacios o saltos de línea"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <br />
      <button onClick={calcular} disabled={input.trim() === ""}>Calcular</button>
      <button onClick={limpiar} style={{ marginLeft: "10px" }}>Limpiar datos</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {resultados.length > 0 && (
        <div>
          <h3>Resultados:</h3>
          <ul>
            {resultados.map((res, idx) => (
              <li key={idx}>{res}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
