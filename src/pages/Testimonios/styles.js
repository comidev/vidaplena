import styled from "@emotion/styled";

export const TestimoniosBody = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    padding-bottom: 4rem;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const Options = styled.section`
    display: flex;
    justify-content: center;
`;
