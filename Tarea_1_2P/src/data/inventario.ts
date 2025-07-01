export type Producto = {
  id: number;
  nombre: string;
  cantidad: number;
  precio: number;
};

export const productosIniciales: Producto[] = [
  { id: 1, nombre: "Laptop", cantidad: 5, precio: 750 },
  { id: 2, nombre: "Mouse", cantidad: 20, precio: 15 },
  { id: 3, nombre: "Teclado", cantidad: 10, precio: 25 }
];
