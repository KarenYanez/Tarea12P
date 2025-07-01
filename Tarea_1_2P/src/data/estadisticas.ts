export function parseInput(input: string): number[] {
  const raw = input.split(/[\s,]+/).map(n => n.trim());
  const numbers = raw.map(Number).filter(n => !isNaN(n));
  return numbers;
}

export function calcularMedia(data: number[]): number {
  return data.reduce((a, b) => a + b, 0) / data.length;
}

export function calcularMediana(data: number[]): number {
  const sorted = [...data].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

export function calcularModa(data: number[]): number[] {
  const freq: Record<number, number> = {};
  data.forEach(n => (freq[n] = (freq[n] || 0) + 1));
  const maxFreq = Math.max(...Object.values(freq));
  const modas = Object.keys(freq)
    .filter(k => freq[+k] === maxFreq)
    .map(Number);
  return modas.length === data.length ? [] : modas;
}

export function calcularVarianzaMuestral(data: number[]): number {
  const media = calcularMedia(data);
  const sum = data.reduce((acc, val) => acc + Math.pow(val - media, 2), 0);
  return sum / (data.length - 1);
}

export function calcularVarianzaPoblacional(data: number[]): number {
  const media = calcularMedia(data);
  const sum = data.reduce((acc, val) => acc + Math.pow(val - media, 2), 0);
  return sum / data.length;
}

export function calcularDesviacionEstandarMuestral(data: number[]): number {
  return Math.sqrt(calcularVarianzaMuestral(data));
}

export function calcularDesviacionEstandarPoblacional(data: number[]): number {
  return Math.sqrt(calcularVarianzaPoblacional(data));
}

export function calcularRango(data: number[]): number {
  return Math.max(...data) - Math.min(...data);
}

export function calcularMinimo(data: number[]): number {
  return Math.min(...data);
}

export function calcularMaximo(data: number[]): number {
  return Math.max(...data);
}
