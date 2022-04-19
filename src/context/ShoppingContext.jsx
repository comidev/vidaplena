import { createContext, useState } from "react";

const Contexto = createContext({});

export function ShoppingContextProvider({ children }) {
    const [listaCompras, setListaCompras] = useState([]);
    const [datosVenta, setDatosVenta] = useState({
        cantidadCompras: 0,
        precioTotal: 0,
    });

    const updateShopping = () => {
        setListaCompras(listaCompras);
        let cantidadCompras = 0;
        let precioTotal = 0;
        listaCompras.forEach((item) => {
            cantidadCompras += item.cantidad;
            precioTotal += item.cantidad * item.price;
        });
        setDatosVenta({ cantidadCompras, precioTotal });
    };

    const agregarProducto = (producto) => {
        const areEqual = (item) =>
            item.productName === producto.productName &&
            item.content === producto.content &&
            item.type === producto.type;

        const existeProducto = listaCompras.find(areEqual);

        existeProducto
            ? (existeProducto.cantidad = producto.cantidad)
            : listaCompras.push(producto);

        updateShopping();
    };

    const eliminarProducto = (index) => {
        listaCompras.splice(index, 1);
        updateShopping();
    };

    return (
        <Contexto.Provider
            value={{ listaCompras, agregarProducto, datosVenta, eliminarProducto }}>
            {children}
        </Contexto.Provider>
    );
}

export default Contexto;
