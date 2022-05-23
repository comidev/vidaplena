import styled from "@emotion/styled";
import { BREAK_POINTS, COLORS } from "styles";

export const ProductsBodyContainer = styled.div`
    display: grid;
    grid-template-columns: 8fr 2fr;
    gap: 1rem;

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        grid-template-columns: 1fr;
    }
`;

/* ---------------------------------------- */

export const ProductosBody = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(11.6rem, 1fr));
    justify-content: start;
    gap: 1rem;
`;

/* ---------------------------------------- */
export const KeywordsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const KeywordsTitle = styled.h2`
    font-weight: 100;
    font-size: 1rem;
    margin-bottom: 0.5rem;
`;

export const Keywords = styled.button`
    color: ${COLORS.WHITE};
    background-color: ${({ bg }) => bg};
    border: 1px solid ${({ bg }) => bg};
    margin-right: 0.3rem;
    margin-bottom: 0.2rem;
    padding: 0.2rem 0.2rem 0.1rem;
    font-size: 14px;
    cursor: pointer;

    @media (hover: hover) {
        &:hover {
            background-color: ${COLORS.WHITE};
            color: ${COLORS.BLACK};
            border-color: ${COLORS.BLACK};
            transform: scale(106%);
        }
    }
`;

/* ---- CERTIFICACIONES ------------------- */

export const CertificacionesContainer = styled.div`
    margin: 0 auto;
    margin-top: 4rem;
    max-width: max-content;
    padding: 1rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 2rem;
`;
