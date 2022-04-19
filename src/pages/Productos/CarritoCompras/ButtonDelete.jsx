import React from "react";
import { DeleteItem } from "./styles";
import useGlobalShopping from "hooks/useGlobalShopping";
import { CgClose } from "react-icons/cg";

export default function ButtonDelete({ index }) {
    const { eliminarProducto } = useGlobalShopping();
    const handleClick = () => eliminarProducto(index);

    return (
        <DeleteItem onClick={handleClick}>
            <CgClose />
        </DeleteItem>
    );
}
