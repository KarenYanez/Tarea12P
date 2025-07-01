import { useState } from "react";
import { productosIniciales, type Producto } from "../data/inventario";
import { FichaProducto } from "./FichaProducto";

export const Inventario = () => {
  const [productos, setProductos] = useState<Producto[]>(productosIniciales);
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState<number>(0);
  const [precio, setPrecio] = useState<number>(0);
  const [mensaje, setMensaje] = useState("");

  const agregarProducto = () => {
    if (!nombre || cantidad < 0 || precio < 0) {
      setMensaje("Datos inválidos.");
      return;
    }

    const nuevo: Producto = {
      id: productos.length > 0 ? productos[productos.length - 1].id + 1 : 1,
      nombre,
      cantidad,
      precio,
    };

    setProductos([...productos, nuevo]);
    setNombre("");
    setCantidad(0);
    setPrecio(0);
    setMensaje("Producto agregado correctamente.");
  };

  const actualizarCantidad = (id: number, nuevaCantidad: number) => {
    setProductos((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, cantidad: Math.max(nuevaCantidad, 0) } : p
      )
    );
  };

  const eliminarProducto = (id: number) => {
    setProductos((prev) => prev.filter((p) => p.id !== id));
    setMensaje("Producto eliminado.");
  };

  return (
    <div className="container">
      <h1>Gestión de Inventario</h1>

      <h3>Agregar Producto</h3>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={cantidad}
        onChange={(e) => setCantidad(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(Number(e.target.value))}
      />
      <button onClick={agregarProducto}>Agregar</button>

      {mensaje && <p style={{ color: "green" }}>{mensaje}</p>}

      <h3>Listado de Productos</h3>
      <FichaProducto
        productos={productos}
        onActualizar={actualizarCantidad}
        onEliminar={eliminarProducto}
      />
    </div>
  );
};
