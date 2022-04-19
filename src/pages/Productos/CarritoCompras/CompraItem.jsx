import React from "react";
import { ListaItem, ListaSubItem } from "./styles";
import ButtonDelete from "./ButtonDelete";

function CompraItem({ cantidad, productoName, precio, index }) {
    return (
        <ListaItem>
            <ListaSubItem>{cantidad}</ListaSubItem>
            <ListaSubItem>{productoName}</ListaSubItem>
            <ListaSubItem>S/ {(precio * cantidad).toFixed(1)}</ListaSubItem>
            <ButtonDelete index={index} />
        </ListaItem>
    );
}
export default React.memo(CompraItem);
