import React from "react";
import { DeleteItem } from "./styles";
import useGlobalShopping from "hooks/useGlobalShopping";
import { CgClose } from "react-icons/cg";

import { removeProduct } from "redux/listaComprasSlice";
import { useDispatch } from "react-redux";

export default function ButtonDelete({ index }) {
    const { eliminarProducto } = useGlobalShopping();
    const dispatch = useDispatch();

    const handleClick = () => {
        eliminarProducto(index);
        dispatch(removeProduct(index));
    };

    return (
        <DeleteItem onClick={handleClick}>
            <CgClose />
        </DeleteItem>
    );
}
