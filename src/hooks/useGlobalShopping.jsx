import { useContext } from "react";
import ShoppingContext from "context/ShoppingContext";

export default function useGlobalShopping() {
    const { listaCompras, agregarProducto, datosVenta, eliminarProducto } =
        useContext(ShoppingContext);

    return { listaCompras, agregarProducto, datosVenta, eliminarProducto };
}
