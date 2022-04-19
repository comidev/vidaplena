import styled from "@emotion/styled";
import { Link as LinkRouter } from "react-router-dom";
import { COLORS } from "styles";

export const ButtonsStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    ${({ pdB }) => `padding-bottom: ${pdB || `3rem`};`}

    ${({ mgTop }) => mgTop && `margin-top: ${mgTop};`}

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const buttonStyle = `
    display: inline-block;
    max-width: max-content;
    height: max-content;
    padding: 0.7rem 1rem;
    text-align: center;
    font-weight: 501;
    border-radius: 0.4rem;

    color: ${COLORS.WHITE};
    background: ${COLORS.PRIMARY};
    box-shadow: 0px 0px 5px  rgba(0, 0, 0, 0.3);

    transition: all ease 0.3s;

    @media (hover: hover) {
        &:hover {
            color: ${COLORS.BLACK};
            background: ${COLORS.WHITE};
            box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);

            transform: translateY(-7px);
        }
    }

    @media screen and (max-width: 1024px) {
        &:active {
            transform: translateY(-7px);
        }
    }
`;

export const ButtonStyle = styled.button`
    ${buttonStyle}
    background-color: ${COLORS.PRIMARY};
    border-color: ${COLORS.PRIMARY};
    cursor: pointer;
`;

export const ButtonLink = styled.a`
    ${buttonStyle}
    ${({ bg }) => bg && `background: ${bg};`}
    margin-right: ${({ mr }) => mr || "2rem"};

    color: ${COLORS.WHITE};

    @media screen and (max-width: 600px) {
        margin-right: 0;
        ${({ mb }) => mb && "margin-bottom: 2rem;"}
    }
`;

export const ButtonRStyle = styled(LinkRouter)`
    ${buttonStyle}
`;
