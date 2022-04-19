import React from "react";
import { COLORS } from "styles";
import { ListaHeader, ListaSubItem, CompraLabel } from "./styles";

function ListaCabecera() {
    return (
        <ListaHeader>
            <ListaSubItem>
                <CompraLabel bg={COLORS.SUCCESS}>Cantidad</CompraLabel>
            </ListaSubItem>
            <ListaSubItem>
                <CompraLabel bg={COLORS.SUCCESS}>Nombre</CompraLabel>
            </ListaSubItem>
            <ListaSubItem>
                <CompraLabel bg={COLORS.SUCCESS}>Precio</CompraLabel>
            </ListaSubItem>
        </ListaHeader>
    );
}

export default React.memo(ListaCabecera);
