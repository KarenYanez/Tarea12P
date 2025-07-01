import { Link } from "react-router-dom";

interface MenuItem {
  label: string;
  path: string;
}

export const Navbar = () => {
  const menuItems: MenuItem[] = [
    { label: "Inicio", path: "/" },
    { label: "Cálculos Estadísticos", path: "/estadistica" },
    { label: "Resolución de Ecuaciones", path: "/ecuaciones" },
    { label: "Gestión de Inventario", path: "/inventario" }
  ];

  return (
    <nav style={{ marginBottom: "1rem" }}>
      {menuItems.map((item, index) => (
        <span key={item.path}>
          <Link to={item.path}>{item.label}</Link>
          {index < menuItems.length - 1 && " | "}
        </span>
      ))}
    </nav>
  );
};
