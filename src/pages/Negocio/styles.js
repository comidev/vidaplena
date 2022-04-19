import styled from "@emotion/styled";
import { BREAK_POINTS, COLORS } from "styles";

export const NegocioBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.3rem;
    margin-top: 4rem;
    padding-bottom: 1rem;

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        margin-top: 0rem;
        grid-template-columns: 1fr;
    }
`;

export const NegocioInfo = styled.section`
    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        grid-row-end: -1;
    }
`;

export const ImagenContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        gap: 2rem;
    }
`;

export const NegocioTitle = styled.h2`
    margin-top: 3rem;
    text-align: center;

    font-size: 2rem;
    font-weight: 600;
`;

export const Lista = styled.ul`
    display: grid;
    max-width: 50rem;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 420px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const ListaItem = styled.li`
    max-width: 10rem;
    margin: 0 auto;
    height: max-content;
    padding: 1rem;
    font-weight: 400;
    font-size: 1.2rem;
    border-radius: 0.4rem;
    text-align: center;
    color: ${COLORS.WHITE};
    background: ${COLORS.BG2};
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
`;
