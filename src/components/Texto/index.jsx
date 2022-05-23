import styled from "@emotion/styled";
import { COLORS } from "styles";

export const P = styled.p`
    color: ${({ color }) => color || COLORS.TEXT};
    margin: ${({ mgTB }) => mgTB || "2rem"} auto;
    max-width: 60rem;
    font-size: ${({ fontSize }) => fontSize || "20px"};
    line-height: ${({ lineHeight }) => lineHeight || "1.7rem"};
    ${({ center }) => center && `text-align: center`};

    @media screen and (max-width: 991px) {
        font-size: 16px;
    }
`;

export default function index({
    children,
    center,
    fontSize,
    lineHeight,
    color,
    mgTB,
}) {
    return (
        <P
            center={center}
            fontSize={fontSize}
            lineHeight={lineHeight}
            color={color}
            mgTB={mgTB}>
            {children}
        </P>
    );
}
