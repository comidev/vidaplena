import styled from "@emotion/styled";
import { COLORS, BREAK_POINTS } from "styles";

export const CantidadNotificacion = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 50%;
    font-size: 1rem;
    background-color: ${COLORS.RED};
    color: ${COLORS.WHITE};
`;

export const Shopping = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    z-index: 20;
    top: 4rem;
    right: 0rem;

    width: 14rem;
    height: 5.3rem;
    border-radius: 0 0 0 2.5rem;
    backdrop-filter: blur(15px);

    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.21);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.21);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.21);

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        right: ${({ right }) => right};

        width: 11.5rem;
        height: 4rem;

        border-radius: 0 0 0 2rem;

        transition: right 400ms ease;
    }
`;

export const IconShop = styled.button`
    position: relative;

    border-radius: 50%;
    background-color: ${({ bg }) => bg};
    color: #fff;
    font-size: 2rem;

    cursor: pointer;
    width: max-content;
    margin-right: 1.5rem;
    padding: 1rem 1.1rem 0.5rem 0.9rem;
    transition-property: background-color, transform;
    transition: ease 0.3s;

    @media (hover: hover) {
        &:hover {
            transform: scale(103%);
        }
    }

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        font-size: 1.7rem;
        margin-right: 1rem;
        padding: 0.6rem 0.7rem 0.3rem 0.5rem;

        &:active {
            transform: scale(103%);
        }
    }
`;

/* LISTA DE COMPRAS */

export const ListaResultados = styled.div`
    display: flex;
    flex-direction: column;

    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.21);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.21);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.21);

    position: fixed;
    right: ${({ moverRight }) => moverRight}; // 1rem -21rem
    top: 5rem;
    background-color: ${COLORS.WHITE};
    color: ${COLORS.TEXT};

    width: 320px;

    border-radius: 2rem;
    padding: 1rem 0 0.5rem;

    transition: right 400ms ease;

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        top: 3.8rem;
    }

    @media screen and (max-width: 352px) {
        width: 90vw;
        font-size: 0.8rem;
    }
`;

export const ListaHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ListaBody = styled.ul`
    overflow: auto;
    min-height: 4.5rem;
    height: calc(100vh - 18rem);
    max-height: 300px;
`;

export const ListaItem = styled.li`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;

    position: relative;

    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    height: 4rem;
`;

export const ListaSubItem = styled.div`
    text-align: center;
    ${({ bR }) => bR && `border-right: 1px solid rgba(0, 0, 0, 0.1);`}
`;

export const DeleteItem = styled.button`
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    width: 1rem;
    height: 1rem;

    font-size: 0.9rem;
    padding: 0.06rem 0 0 0.01rem;

    border-radius: 50%;
    background-color: ${COLORS.BLACK};
    color: ${COLORS.WHITE};

    @media (hover: hover) {
        &:hover {
            cursor: pointer;
            padding-top: 0.05rem;
            transform: scale(105%);
        }
    }

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        &:active {
            padding-top: 0.05rem;
            transform: scale(105%);
        }
    }
`;

export const ListaFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-top: 0.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const CompraLabel = styled.p`
    display: inline-block;
    width: max-content;
    max-width: 100%;
    border-radius: 0.4rem;
    padding: 0.5rem;
    margin: 0.2rem 0;
    background-color: ${({ bg = COLORS.BLACK }) => bg};
    color: ${COLORS.WHITE};

    position: relative;
`;

export const DescLabel = styled.span`
    display: inline-block;
    font-size: 0.7rem;

    position: absolute;
    top: 1.5rem;
    right: -0.8rem;

    transform: rotateZ(-20deg);

    width: 2rem;
    height: 1.2rem;

    border-radius: 0.4rem;
    padding-top: 0.2rem;

    background-color: ${({ bg = COLORS.BLACK }) => bg};
    color: ${COLORS.WHITE};
`;
