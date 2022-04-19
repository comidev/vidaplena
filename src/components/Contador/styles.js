import styled from "@emotion/styled";
import { COLORS } from "styles";

export const ContadorContainer = styled.div`
    display: flex;

    width: max-content;
    height: max-content;

    ${({ consola }) =>
        consola &&
        `
    border-radius: 0.4rem;
    overflow: hidden;
    gap: 0.1rem;

    `}
`;

export const ContadorButtons = styled.div`
    display: flex;
    flex-direction: column;

    width: max-content;
    height: max-content;
`;

export const ContadorButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 0.1rem;
    margin-bottom: 0.1rem;

    border-radius: 0.4rem;
    background-color: ${COLORS.PRIMARY};
    color: ${COLORS.WHITE};

    width: 2rem;
    height: 1.5rem;

    cursor: pointer;
    font-size: 1.3rem;

    ${({ consola }) =>
        consola &&
        `
        height: 2.125rem;
        font-size: 2rem;

    `}

    @media (hover: hover) {
        &:hover {
            background-color: ${COLORS.BLACK};
        }
    }

    @media screen and (max-width: 1024px) {
        &:active {
            background-color: ${COLORS.BLACK};
        }
    }
`;

export const ContadorValor = styled.input`
    width: 2.5rem;
    border-radius: 0.4rem;
    border: 2px solid ${COLORS.PRIMARY};
    margin-right: 0.1rem;
    margin-bottom: 0.1rem;
    text-align: center;
    font-size: 20px;
`;
