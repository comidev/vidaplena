import styled from "@emotion/styled";
import { COLORS } from "styles";

export const ContactBody = styled.div`
    display: grid;
    max-width: 70rem;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

export const ContactItem = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
`;

export const Button = styled.a`
    display: inline-block;

    width: max-content;
    height: max-content;
    padding: 0.7rem 1rem;

    font-weight: 501;

    border-radius: 0.4rem;
    ${({ bg }) => `
    background: ${bg};
    `}
    color: ${COLORS.WHITE};

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
