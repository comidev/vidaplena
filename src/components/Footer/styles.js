import styled from "@emotion/styled";
import { COLORS } from "styles";

export const FooterContainer = styled.footer`
    background: ${COLORS.GRADIENT.FOOTER};
    color: ${COLORS.WHITE};
    box-shadow: 0px -1px 5px ${COLORS.BORDER_LINE};
    margin-top: auto;
`;

export const FooterBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    margin-bottom: 3rem;

    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`;

export const FooterItem = styled.section`
    margin: 0 auto;
`;

export const FooterLinks = styled.ul`
    margin: 0 auto;
    max-width: max-content;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 900px) {
        align-items: center;
    }
`;

export const FooterLink = styled.li`
    display: grid;
    max-width: max-content;
`;

export const IconRRRSS = styled.div`
    color: ${({ color }) => color};
    height: 1.2rem;
    font-size: 1.3rem;
`;

export const FooterFooter = styled.section`
    display: flex;
    text-align: center;
    justify-content: center;

    height: 5rem;
    align-items: center;
    font-size: 0.9rem;
    box-shadow: 0px -1px ${COLORS.BORDER_LINE};
`;
