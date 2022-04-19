import styled from "@emotion/styled";
import { BREAK_POINTS, COLORS } from "styles";

export const HomeTitle = styled.h1`
    text-align: center;
    margin-top: 2rem;
    font-weight: 800;
    font-size: calc(1.25vw + 1.25vh + 1.8rem);

    @media screen and (max-width: 600px) {
        font-size: 3.2rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 2.8rem;
    }
`;

export const HomeBody = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 4rem;
    padding-bottom: 6rem;

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        grid-template-columns: 1fr;
    }
`;

export const HomeSection = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin: 2rem auto 0;

    @media screen and (max-width: 575px) {
        grid-template-columns: 1fr;
    }
`;

export const HomeArticle = styled.article`
    border-radius: 2rem;
    /* background: ${COLORS.WHITE}; */

    box-shadow: 0px 0px 13px 1px rgba(0, 0, 0, 0.37);
    -webkit-box-shadow: 0px 0px 13px 1px rgba(0, 0, 0, 0.37);
    -moz-box-shadow: 0px 0px 13px 1px rgba(0, 0, 0, 0.37);
    padding: 2rem 1rem 0.5rem;
`;

export const HomeSubtitle = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0;
    font-weight: 600;
    font-size: 20px;
`;
