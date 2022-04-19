import React from "react";
import { COLORS } from "styles";
import Imagen from "components/Imagen";
import {
    ProductoDetalles,
    ProductName,
    ProductoVerMas,
    VerMasIcon,
    VerMasText,
    PreciosContainer,
    PrecioItem,
    DescLabel,
} from "./styles";
import { Label } from "components/Testimonio/styles";

function ProductoCardInfo({ productName, img, content, id, price }) {
    return (
        <>
            <ProductoDetalles>
                <ProductName>{productName}</ProductName>
                <Imagen src={img} alt={productName} maxWidth="100%" ratio="1" />
                <Label fz="true" mgTop="1rem" bg={COLORS.BLUE}>
                    {content}
                </Label>
                <ProductoVerMas to={`${id}`}>
                    <VerMasIcon>+</VerMasIcon>
                    <VerMasText>Ver detalles</VerMasText>
                </ProductoVerMas>
            </ProductoDetalles>
            <PreciosContainer>
                <PrecioItem>
                    Regular:{" "}
                    <Label fz="true" bg={COLORS.PRIMARY}>
                        S/ {price}
                    </Label>
                </PrecioItem>
                <PrecioItem>
                    Membresía:{" "}
                    <Label fz="true" bg={COLORS.RED}>
                        S/ {(0.8 * price).toFixed(1)}
                        <DescLabel bg={COLORS.SUCCESS}>20%</DescLabel>
                    </Label>
                </PrecioItem>
            </PreciosContainer>
        </>
    );
}

export default React.memo(ProductoCardInfo);
