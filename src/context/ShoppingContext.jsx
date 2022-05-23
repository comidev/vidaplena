import { createContext, useReducer } from "react";

const Contexto = createContext({});

const ACTIONS = {
    ADD: "agregar producto",
    UPDATE: "actualizar lista",
    DELETE: "eliminar producto",
};

const reducer = (listaCompras, action) => {
    if (action.type === ACTIONS.ADD) {
        listaCompras.push(action.payload.producto);
    } else if (action.type === ACTIONS.UPDATE) {
        const indexUpdate = action.payload.index;
        listaCompras[indexUpdate].cantidad = action.payload.cantidad;
    } else if (action.type === ACTIONS.DELETE) {
        listaCompras.splice(action.payload.index, 1);
    }
    return [...listaCompras];
};

export function ShoppingContextProvider({ children }) {
    const [listaCompras, dispatch] = useReducer(reducer, []);

    const guardarProducto = (producto) => {
        const existsProduct = listaCompras.find((item) => item.id === producto.id);
        if (existsProduct) {
            // Actualizar
            const index = listaCompras.indexOf(existsProduct);
            dispatch({
                type: ACTIONS.UPDATE,
                payload: { index, cantidad: producto.cantidad },
            });
        } else {
            // Agregar
            dispatch({
                type: ACTIONS.ADD,
                payload: { producto },
            });
        }
    };

    const eliminarProducto = (index) => {
        dispatch({
            type: ACTIONS.DELETE,
            payload: { index },
        });
    };

    return (
        <Contexto.Provider
            value={{
                listaCompras,
                guardarProducto,
                eliminarProducto,
            }}>
            {children}
        </Contexto.Provider>
    );
}

export default Contexto;
