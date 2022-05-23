import { createSlice } from "@reduxjs/toolkit";

const listaComprasSlice = createSlice({
    name: "lista de compras",
    initialState: [],
    reducers: {
        saveProduct(state, action) {
            const existsProduct = state.find(
                (item) => item.id === action.payload.id
            );

            if (existsProduct) {
                existsProduct.cantidad = action.payload.cantidad;
            } else {
                state.push(action.payload);
            }
        },
        removeProduct(state, action) {
            state.splice(action.payload, 1);
        },
    },
});

export const { saveProduct, removeProduct } = listaComprasSlice.actions;
export default listaComprasSlice.reducer;
