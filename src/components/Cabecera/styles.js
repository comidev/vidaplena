import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { COLORS, BREAK_POINTS, MAX_WIDTH } from "styles";

export const Nav = styled.header`
    position: fixed;
    z-index: 100;
    top: 0;

    width: 100%;
    height: 4rem;

    background: ${COLORS.GRADIENT.NAVBAR};
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: ${MAX_WIDTH.LG};
    height: 4rem;
    margin: 0 auto;
    padding: 0 1.5rem;

    @media screen and (max-width: ${BREAK_POINTS.DESKTOP}) {
        max-width: ${MAX_WIDTH.MD};
    }
    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        max-width: max-content;
    }
`;

export const LogoContainer = styled.figure`
    width: 9rem;
    aspect-ratio: 4.733127481;
    margin: 0;
    transition: transform 0.3s ease;

    @media (hover: hover) {
        &:hover {
            transform: scale(115%);
        }
    }

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        width: 9rem;
    }
`;

// MENU -----------------------------------

export const NavMenuContainer = styled.div``;

export const MenuLinkList = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        position: fixed;
        left: ${({ move }) => move};
        top: 4.5rem;

        min-width: 16.5rem;
        width: max-content;

        min-height: 6rem;
        height: calc(100vh - 4.5rem);
        max-height: 480px;

        flex-direction: column;

        border-radius: 1rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        background-color: ${COLORS.BG3};

        overflow: auto;
        transition: left 400ms ease;
    }
`;

export const NavLi = styled.li`
    margin-left: 1rem;

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        display: grid;
        margin: 0 auto;
        height: 5rem;
        width: 90%;
    }
`;

export const Link = styled(NavLink)`
    display: flex;
    align-items: center;
    /* gap: 0.5rem; */

    font-weight: 501;
    margin: auto 0;
    padding: 0.5rem 0;
    color: ${COLORS.WHITE};

    transition: transform ease 0.3s;

    @media (hover: hover) {
        &:hover {
            transform: scale(105%);
        }
    }

    &:active {
        transform: scale(105%);
    }

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        font-size: 1.5rem;
        padding: 0.5rem 2rem;
    }
`;

export const Icon = styled.div`
    font-size: 1.2rem;
    height: 1.2rem;
    margin-right: 0.5rem;

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        display: inline-block;
        font-size: 1.5rem;
        height: 1.5rem;
    }
`;

export const IconMenu = styled.button`
    display: none;
    font-size: 2rem;

    position: absolute;
    top: 0.5rem;
    right: 1rem;

    width: 3rem;
    height: 3rem;
    padding-top: 0.5rem;
    padding-left: 0.4rem;

    cursor: pointer;

    border-radius: 50%;
    background-color: ${COLORS.WHITE};
    color: ${COLORS.PRIMARY};

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        display: inline-block;
        &:active {
            transform: scale(110%);
        }
    }
`;
