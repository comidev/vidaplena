import React from "react";
import { COLORS } from "styles";
import { KeywordsContainer, KeywordsTitle, Keywords } from "./styles";
import { CATEGORIAS_PRODUCT } from "data/productos.js";

function Busquedas({ onClick }) {
    return (
        <section>
            <KeywordsTitle>Búsquedas:</KeywordsTitle>
            <KeywordsContainer>
                {CATEGORIAS_PRODUCT.map((item, index) => (
                    <Keywords
                        onClick={() => onClick(item)}
                        bg={COLORS.RANDOMS[index % COLORS.RANDOMS.length]}
                        key={index}>
                        {item}
                    </Keywords>
                ))}
            </KeywordsContainer>
        </section>
    );
}

export default React.memo(Busquedas);
