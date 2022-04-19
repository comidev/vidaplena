import React from "react";
import {
    CategoriasContainer,
    CategoriasLabel,
    CategoriasStyle,
    Categoria,
} from "./styles";

function Categorias({ categoriaName, onChange, categoriasData, mgB }) {
    return (
        <CategoriasContainer mgB={mgB}>
            <CategoriasLabel>{categoriaName}</CategoriasLabel>
            <CategoriasStyle onChange={onChange}>
                <Categoria value="Todo" selected>
                    Todo
                </Categoria>
                {categoriasData.map((item) => (
                    <Categoria value={item}>{item}</Categoria>
                ))}
            </CategoriasStyle>
        </CategoriasContainer>
    );
}

export default React.memo(Categorias);
