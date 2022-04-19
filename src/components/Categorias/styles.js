import styled from "@emotion/styled";
import { COLORS } from "styles";

export const CategoriasContainer = styled.section`
    display: flex;
    align-items: center;

    max-width: 20rem;
    height: 2.2rem;
    ${({ mgB }) => mgB && `margin-bottom: ${mgB};`}
    border-radius: 0.4rem;
    overflow: hidden;

    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.76);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.76);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.76);

    margin-right: 3rem;

    @media screen and (max-width: 600px) {
        margin-right: 0;
        margin-bottom: 1.5rem;
    }
`;

export const CategoriasLabel = styled.div`
    display: inline-block;
    width: max-content;
    height: 2.2rem;
    padding: 0.5rem;

    background-color: ${COLORS.PRIMARY};
    color: ${COLORS.WHITE};
`;

export const CategoriasStyle = styled.select`
    border: 0;
    outline: 0;
    width: 100%;
    min-width: 7.5rem;
    height: 2.2rem;
`;

export const Categoria = styled.option`
    @media (hover: hover) {
        &:hover {
            background-color: ${COLORS.PRIMARY};
        }
    }
`;
