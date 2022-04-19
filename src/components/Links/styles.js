import styled from "@emotion/styled";
import { Link as LinkRouter } from "react-router-dom";

export const LinkRStyle = styled(LinkRouter)`
    display: flex;
    align-items: center;

    font-weight: 501;
    margin: 0.5rem 0;
    color: ${({ color }) => color};

    transition: transform ease 0.3s;

    @media (hover: hover) {
        &:hover {
            transform: scale(105%);
            ${({ hover }) => hover && `color: ${hover};`}
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
            transform: scale(105%);
            border-width: 4px;
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
