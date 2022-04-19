import styled from "@emotion/styled";

export const AboutBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    margin-bottom: 5rem;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`;

export const Imagenes = styled.div`
    display: grid;
    gap: 1rem;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    @media screen and (max-width: 780px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`;

export const AboutInfo = styled.section`
    margin-left: auto;
    /* max-width: 35rem; */

    @media screen and (max-width: 1024px) {
        max-width: 40rem;
        margin: auto;
    }
`;

export const AboutFooter = styled.h2`
    max-width: 30rem;
    font-weight: 100;
    text-align: center;
    margin: 3rem auto 0;
`;
