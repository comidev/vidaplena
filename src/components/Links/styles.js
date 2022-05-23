import styled from "@emotion/styled";
import { Link as LinkRouter } from "react-router-dom";
import { COLORS } from "styles";

export const LinkRStyle = styled(LinkRouter)`
    display: flex;
    align-items: center;

    font-weight: 501;
    color: ${({ color }) => color};

    border-radius: 9999px;
    padding: 0.5rem 1rem;
    margin: 0.2rem 0;
    background-color: ${COLORS.WHITE}22;
    background-position: center;
    background-size: 10rem 10rem;

    transition: transform ease 0.3s;

    @media (hover: hover) {
        &:hover {
            background-color: ${COLORS.WHITE}33;
        }
    }

    @media screen and (max-width: 900px) {
        ${({ hover }) =>
            !hover &&
            `
        padding-left: 2rem;
        font-size: 1.5rem;
        `}

        &:active {
            ${({ hover }) => hover && `color: ${hover};`}
        }
    }
`;

export const LinkAStyle = LinkRStyle.withComponent("a");

export const Icon = styled.div`
    font-size: 1.2rem;
    height: 1.2rem;
    margin-right: 0.5rem;

    ${({ color }) => color && `color: ${color};`}

    @media screen and (max-width: 900px) {
        display: inline-block;
        font-size: 1.5rem;
        height: 1.5rem;
    }
`;
