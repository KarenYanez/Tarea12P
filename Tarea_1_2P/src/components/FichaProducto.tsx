import type { Producto } from "../data/inventario";
import { ProductoItem } from "./Producto";

type Props = {
  productos: Producto[];
  onActualizar: (id: number, cantidad: number) => void;
  onEliminar: (id: number) => void;
};

export const FichaProducto = ({ productos, onActualizar, onEliminar }: Props) => {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio Unitario</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((p) => (
          <ProductoItem
            key={p.id}
            item={p}
            onActualizar={onActualizar}
            onEliminar={onEliminar}
          />
        ))}
      </tbody>
    </table>
  );
};
