import styled from "@emotion/styled";
import { Link as LinkRouter } from "react-router-dom";
import { COLORS, MAX_WIDTH, BREAK_POINTS } from "styles";

export const SlidesViewport = styled.section`
    position: relative;
    overflow: hidden;
`;

export const SlidesContainer = styled.div`
    display: flex;

    ${({ width }) => `width: ${width * 100}vw;`}
    height: 30rem;

    transform: translateX(-100vw);
    transition: transform 0ms ease;

    &:active {
        cursor: grab;
    }

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        height: calc(100vh - 4rem);
    }
`;

/* --------------- SLIDE ---------------------- */

export const SlideContainer = styled.article`
    background-image: url(${({ bgImg }) => bgImg});
    background-size: cover;
    width: 100vw;
`;

export const SlideBackStyle = styled.div`
    display: flex;
    background: linear-gradient(
        to bottom,
        rgba(40, 26, 50, 0) 0%,
        rgba(40, 26, 50, 0.01) 1%,
        rgba(40, 26, 50, 1) 100%
    );
    backdrop-filter: blur(3px) contrast(50%);
    height: 100%;
`;

export const SlideInfo = styled.div`
    color: ${COLORS.WHITE};
    margin: auto;
    padding: 0 1.5rem;
    max-width: ${MAX_WIDTH.LG};
    user-select: none;

    @media screen and (max-width: ${BREAK_POINTS.DESKTOP}) {
        max-width: ${MAX_WIDTH.MD};
    }
    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        max-width: ${MAX_WIDTH.SM};
    }

    @media screen and (max-width: 360px) {
        margin: 1rem auto 0;
    }
`;

export const SlideInfoTitleContainer = styled(LinkRouter)`
    font-weight: 700;
    font-size: calc(1.25vw + 1.25vh + 1.8rem);
    color: ${COLORS.WHITE};

    @media screen and (max-width: 600px) {
        font-size: 2.7rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 2.4rem;
    }
`;

export const SlideInfoTitle = styled.div`
    width: max-content;
    transition: transform ease 0.3s;

    @media (hover: hover) {
        &:hover {
            transform: scale(110%);
        }
    }
`;

export const SlideInfoText = styled.p`
    margin-top: 2rem;
    line-height: 1.7rem;
    font-size: 1.3rem;


    @media screen and (max-width: 320px) {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`;
export const SlideButtonContainer = styled.div`
    margin-top: 2rem;
    margin-left: 1rem;
    margin-bottom: 5rem;

    @media screen and (max-width: 320px) {
        margin: 0.5rem 0 4rem 1rem;
    }
`;

/* --------------- BOLITAS -------------------- */

export const BolitasContainer = styled.div`
    position: relative;
    max-width: ${MAX_WIDTH.LG};
    margin: 0 auto;
    padding: 0 1.5rem;

    @media screen and (max-width: ${BREAK_POINTS.DESKTOP}) {
        max-width: ${MAX_WIDTH.MD};
    }
    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        max-width: ${MAX_WIDTH.SM};
    }
`;

export const Bolitas = styled.div`
    display: flex;
    justify-content: end;

    position: absolute;
    bottom: 4rem;
    right: 2rem;
    z-index: 1;

    width: max-content;

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        bottom: 2rem;
        right: 0;
        left: 0;
        margin: 0 auto;
    }

    @media screen and (max-width: 320px) {
        bottom: 0.5rem;
    }
`;
export const Bolita = styled.button`
    height: 0.7rem;
    margin-left: 0.5rem;
    cursor: pointer;

    ${({ isActive }) => {
        if (isActive === "true") {
            return `
    background-color: #fff;
    width: 3rem;
    border-radius: 0.5rem;
    `;
        } else {
            return `
    background-color: #aaa;
    width: 0.7rem;
    border-radius: 50%;
    `;
        }
    }}
    transition: all 200ms ease;

    @media (hover: hover) {
        &:hover {
            background-color: #fff;
        }
    }
    &:active {
        background-color: #fff;
    }
`;
