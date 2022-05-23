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
    max-width: max-content;
    margin: 0 auto;
    gap: 0.5rem;

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
    padding: 0 2rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 1024px) {
        padding: 0 1rem;
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
