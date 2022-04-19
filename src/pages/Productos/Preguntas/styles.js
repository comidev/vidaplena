import styled from "@emotion/styled";
import { BREAK_POINTS, COLORS } from "styles";

export const AvisoContainer = styled.div`
    position: fixed;
    left: 1rem;
    top: 4.5rem;
    z-index: 50;

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        position: absolute;
        left: 0.3rem;
    }
`;

export const MostrarFondo = styled.div`
    position: relative;
    width: 3.7rem;
    height: 3.7rem;
    border-radius: 50%;
    background: ${COLORS.GRADIENT._09};

    transition: transform ease 0.3s;

    @media (hover: hover) {
        &:hover {
            cursor: pointer;
            transform: scale(105%);
        }
    }

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        &:active {
            cursor: pointer;
            transform: scale(105%);
        }
    }
`;

export const MostrarBoton = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    color: ${COLORS.WHITE};
    width: 3.3rem;
    height: 3.3rem;
    border-radius: 50%;
    border: 4px solid ${COLORS.WHITE};
    font-size: 2rem;
    text-align: center;
    padding: 0.1rem 0.1rem 0 0;
`;

export const PreguntaContainer = styled.div`
    position: absolute;
    left: ${({ move }) => move};

    width: 16rem;
    height: 10.5rem;
    margin-top: 0.5rem;
    padding-left: 1rem;
    background-color: ${COLORS.WHITE};
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
    border-radius: 2rem;

    transition: left ease 0.5s;
`;

const pregunta = `
    color: ${COLORS.TEXT};
    height: 0;
    margin-bottom: 2rem;

    user-select: none;

    &::before {
        content: "";
        background-color: ${COLORS.TEXT};
        display: block;
        position: relative;
        top: 2.5rem;
        left: -20.5rem;
        width: 1rem;
        height: 1rem;
        transform: rotateZ(45deg);
        transition: left ease 0.6s;
    }

    &::after {
        content: '';
        color: ${COLORS.WHITE};
        position: relative;
        top: 0.8rem;
        left: -20rem;
        display: block;
        width: 14rem;
        height: 10rem;
        border-radius: 0.4rem;
        padding: 0.5rem 1rem;
        line-height: 1.5rem;
        background-color: ${COLORS.TEXT};
        transition: left ease 0.6s;
    }

    @media (hover : hover) {
        &:hover {
            cursor: pointer;
            &::after {
                left: -0.7rem;
            }
            &::before {
                left: 0.2rem;
            }
        }
    }

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        &:active {
            &::after {
                left: -0.7rem;
            }
            &::before {
                left: 0.2rem;
            }
        }
    }
`;

export const AvisoFueraDePeru = styled.div`
    ${pregunta}
    width: 8.75rem;

    &::after {
        content: 'Descuida, puede adquirirlo de manera online, seleccione los productos que desee y dé click en "Comprar", por interno le diré cómo llegarán los productos hacia su hogar.';
        height: 9rem;
    }
`;

export const AvisoProblemaDeSalud = styled.div`
    ${pregunta}
    width: 13.696rem;
    &::after {
        content: "Envíame un mensaje por Whatsapp, he ayudado a muchas personas. Estoy para servirle. Gracias.";
        height: 6rem;
    }
`;
export const AvisoEntrega = styled.div`
    ${pregunta}
    width: 14.091rem;
    &::after {
        content: 'Si eres de Lima, la entrega es a domicilio o "delivery", si no te encuentras en Lima, igual hacemos envíos a todo Perú. En ambos casos, los detalles lo podemos tratar por interno en Whatsapp.';
        height: 10.5rem;
    }
`;
