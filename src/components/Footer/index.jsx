import { Container, P, H2, COLORS } from "styles";
import {
    FooterBody,
    FooterContainer,
    FooterLinks,
    FooterLink,
    FooterFooter,
    FooterItem,
} from "./styles";

import { RRSS, PAGES } from "data";
import { LinkA, LinkR } from "components/Links";

const Footer = () => {
    return (
        <FooterContainer>
            <Container color={COLORS.WHITE}>
                <FooterBody>
                    <FooterItem>
                        <H2>Permalinks</H2>
                        <FooterLinks>
                            {PAGES.map((pag, index) => (
                                <FooterLink key={index}>
                                    <LinkR
                                        to={pag.to}
                                        linkName={pag.pageName}
                                        hover={COLORS.PRIMARY}
                                    />
                                </FooterLink>
                            ))}
                        </FooterLinks>
                    </FooterItem>
                    <FooterItem>
                        <H2>¡Únete y obtén una vida plena!</H2>
                        <FooterLinks>
                            {RRSS.map((red, index) => (
                                <FooterLink key={index}>
                                    <LinkA
                                        href={red.src}
                                        linkName={red.text}
                                        icon={red.icon}
                                        colorIcon={red.color}
                                        hover={COLORS.PRIMARY}
                                    />
                                </FooterLink>
                            ))}
                        </FooterLinks>
                    </FooterItem>
                </FooterBody>
                <FooterFooter>
                    <P color={COLORS.BG1}>
                        &copy; Página diseñada y construida por Omar Miranda
                    </P>
                </FooterFooter>
            </Container>
        </FooterContainer>
    );
};

export default Footer;
