import { useContext } from "react";
import ShoppingContext from "context/ShoppingContext";

export default function useGlobalShopping() {
    const { listaCompras, guardarProducto, eliminarProducto } =
        useContext(ShoppingContext);

    return { listaCompras, guardarProducto, eliminarProducto };
}
