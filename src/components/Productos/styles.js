import styled from "@emotion/styled";
import { Link as LinkRouter } from "react-router-dom";
import { COLORS, BREAK_POINTS } from "styles";

export const ProductoCardStyle = styled.article`
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
    background-color: ${COLORS.WHITE};
    margin: auto;
    padding: 1rem;

    min-width: 11.6rem;
    max-width: 23.2rem;

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        padding: 0.5rem;
    }
`;

export const ProductoDetalles = styled.div`
    position: relative;

    transition: transform ease 0.3s;

    @media (hover: hover) {
        &:hover {
            transform: scale(105%);
        }
    }

    @media screen and (max-width: 1024px) {
        &:active {
            transform: scale(105%);
        }
    }
`;

export const ProductName = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    color: ${COLORS.BLACK};

    margin: 0;
    padding: 0;

    height: 3rem;

    font-size: 20px;
    font-weight: 100;
`;

export const ProductoVerMas = styled(LinkRouter)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.5rem;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;

    border-radius: 1rem;
    background-color: rgba(0, 0, 0, 0.06);
    color: #fff;
    width: 6rem;
    height: 5rem;

    @media (hover: hover) {
        &:hover {
            color: #fff;
            background-color: #343434;
        }
    }

    @media screen and (max-width: 1024px) {
        &:active {
            color: #fff;
            background-color: #343434;
        }
    }
`;

export const VerMasIcon = styled.div`
    font-size: 5rem;
    font-weight: bold;
    line-height: 3rem;
`;

export const VerMasText = styled.div`
    font-size: 0.8rem;
    line-height: 1rem;
`;

export const ProductoCategorias = styled.div``;

export const Description = styled.div`
    line-height: 1.5;
    color: ${COLORS.TEXT};
    margin-bottom: 0.5rem;
`;

export const PreciosContainer = styled.div``;

export const PrecioItem = styled.div`
    margin-top: 0.5rem;
    font-size: 14px;
`;

export const DescLabel = styled.span`
    display: inline-block;
    font-size: 0.7rem;

    position: absolute;
    top: 1.25rem;
    right: -0.7rem;
    text-align: center;

    transform: rotateZ(-20deg);

    width: 2rem;
    height: 1.2rem;

    border-radius: 0.4rem;
    padding-top: 0.2rem;

    background-color: ${({ bg = COLORS.BLACK }) => bg};
    color: ${COLORS.WHITE};
`;

export const ComprarOpciones = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 1.5rem;
`;

export const ButtonComprar = styled.button`
    background-color: ${COLORS.PRIMARY};
    color: #fff;
    cursor: pointer;
    width: max-content;
    padding: 1rem 1.1rem 0.5rem 0.9rem;
    font-size: 1.5rem;
    border-radius: 50%;
    margin-top: 0.5rem;

    @media (hover: hover) {
        &:hover {
            background-color: ${COLORS.BLACK};
        }
    }

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        &:active {
            background-color: ${COLORS.BLACK};
        }
    }
`;

// PAGE

export const ProductoPageStyle = styled.article`
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);

    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2rem;
    background-color: ${COLORS.WHITE};

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        padding: 1rem;
    }
`;

export const ProductPageHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProductoPageInfo = styled.div`
    max-width: 30rem;

    @media screen and (max-width: 900px) {
        max-width: 100%;
    }
`;

export const ProductoDescription = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 1rem;
    margin-bottom: 1rem;
`;

export const ProductoVenta = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;

    @media screen and (max-width: 420px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
    }
`;

export const ComprarOpcionesPage = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 1.5rem;
    margin: 1rem auto 0;
`;

//  760px cambias de forma a los botoes
