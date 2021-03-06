import styled from "@emotion/styled";

export const ImgContainer = styled.div`
    width: 100%;
    height: fit-content;
    max-width: ${({ maxWidth = `25rem` }) => `${maxWidth}`};
    ${({ ratio }) => ratio && `aspect-ratio: ${ratio};`}
    overflow: hidden;
    ${({ radius }) => radius && `border-radius: ${radius};`}
    ${({ box }) =>
        box &&
        `
         box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    `}
    margin: 0 auto;
`;

export const Img = styled.img`
    display: block;
    width: 100%;
    object-fit: contain;
`;
