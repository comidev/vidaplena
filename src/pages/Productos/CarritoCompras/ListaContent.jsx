import React from "react";
import { COLORS } from "styles";
import {
    ListaBody,
    ListaSubItem,
    ListaFooter,
    CompraLabel,
    DescLabel,
} from "./styles";
import CompraItem from "./CompraItem";

function ListaContent({ listaCompras, precioTotal }) {
    return (
        <>
            <ListaBody>
                {listaCompras.map((item, index) => (
                    <CompraItem
                        cantidad={item.cantidad}
                        productoName={item.productName}
                        precio={item.price}
                        index={index}
                        key={item.id}
                    />
                ))}
            </ListaBody>
            <ListaFooter>
                <ListaSubItem bR="true">
                    <CompraLabel bg={COLORS.RANDOMS[1]}>Total</CompraLabel>
                </ListaSubItem>
                <ListaSubItem>
                    <CompraLabel bg={COLORS.RANDOMS[3]}>
                        S/ {precioTotal.toFixed(1)}
                    </CompraLabel>
                </ListaSubItem>
                <ListaSubItem>
                    <CompraLabel bg={COLORS.RED}>
                        S/ {(0.8 * precioTotal).toFixed(1)}
                        <DescLabel bg={COLORS.SUCCESS}>20%</DescLabel>
                    </CompraLabel>
                </ListaSubItem>
            </ListaFooter>
        </>
    );
}
export default React.memo(ListaContent);
