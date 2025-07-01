import type { Producto } from "../data/inventario";

type Props = {
  item: Producto;
  onActualizar: (id: number, nuevaCantidad: number) => void;
  onEliminar: (id: number) => void;
};

export const ProductoItem = ({ item, onActualizar, onEliminar }: Props) => {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.nombre}</td>
      <td>{item.cantidad}</td>
      <td>${item.precio.toFixed(2)}</td>
      <td>
        <button onClick={() => onActualizar(item.id, item.cantidad + 1)}>+1</button>
        <button onClick={() => onActualizar(item.id, item.cantidad - 1)} disabled={item.cantidad === 0}>-1</button>
        <button onClick={() => onEliminar(item.id)}>Eliminar</button>
      </td>
    </tr>
  );
};
