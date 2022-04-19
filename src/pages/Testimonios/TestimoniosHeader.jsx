import React from "react";
import { COLORS, P } from "styles";
import { Options } from "./styles";

import Categorias from "components/Categorias";

import { CATEGORIAS_SALUD } from "data/testimonios.js";

function TestimoniosHeader({ onChange, size }) {
    return (
        <>
            <Options>
                <Categorias
                    categoriaName="Categoría"
                    onChange={onChange}
                    categoriasData={CATEGORIAS_SALUD}
                    mgB="3rem;"
                />
            </Options>
            <P color={COLORS.TEXT}>Resultados: {size}</P>
        </>
    );
}

export default React.memo(TestimoniosHeader);
