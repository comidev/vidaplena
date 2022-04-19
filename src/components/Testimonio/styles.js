import styled from "@emotion/styled";
import { COLORS } from "styles";

export const TestimonioContainer = styled.article`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    border-radius: 2rem;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.21);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.21);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.21);
    padding: 1rem;
`;

export const Label = styled.p`
    display: inline-block;
    position: relative;
    width: max-content;
    max-width: 100%;
    border-radius: 0.4rem;
    padding: 0.3rem 0.5rem;
    margin: 0.2rem 0;
    ${({ fz }) => fz && "font-size: 14px;"}
    margin-right: 0.5rem;
    ${({ mgTop }) => mgTop && `margin-top: ${mgTop};`}
    background-color: ${({ bg = COLORS.BLACK }) => bg};
    color: ${COLORS.WHITE};
`;

export const TestimonioBody = styled.section``;

export const Products = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    margin: 0 auto;
    width: 100%;
`;

export const Product = styled.li`
    color: ${COLORS.WHITE};
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.7rem 1rem;
    border-radius: 0.4rem;
    background-color: ${({ bg }) => bg};
`;

export const ImagenesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 2rem;
    width: 100%;
    margin-top: 1rem;

    @media screen and (max-width: 48rem) {
        grid-template-columns: 1fr;
    }
`;

export const ImagenContainer = styled.div`
    width: 100%;
    height: fit-content;
    max-width: 20rem;
    overflow: hidden;

    margin: 0 auto;

    border-radius: 0.4rem;
    box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.51);
    -webkit-box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.51);
    -moz-box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.51);
`;
