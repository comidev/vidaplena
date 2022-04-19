import { Container, H1, H3, Section } from "styles";
import { ContactBody, ContactItem } from "./styles";
import {
    ButtonFacebook,
    ButtonWhatsapp,
    ButtonMessenger,
    ButtonR,
    Buttons,
} from "components/Buttons";
import Imagen from "components/Imagen";
import imgContacto from "images/perfil/contact.webp";
import CEO from "components/CEO";

const ContactContainer = ({ children, color }) => {
    return (
        <Section>
            <CEO
                title="Contacto"
                description="¿Te interesa el Negocio? ¿Te interesa la Salud / Alimentación? ¿Quieres empezar? ¡Contáctame! A continuación te dejo mi whastapp, messenger y facebook"
                URL={window.location.href}
                img={imgContacto}
                imgAlt="Imagen de Contacto."
            />
            <Container color={color}>{children}</Container>
        </Section>
    );
};

export default function Contact() {
    return (
        <ContactContainer>
            <H1>¿Quieres empezar? ¡Contáctame!</H1>
            <ContactBody>
                <Imagen
                    src={imgContacto}
                    alt={"Perfil"}
                    box="true"
                    radius="1.2rem"
                />
                <ContactItem>
                    <H3>¿Te interesa el Negocio?</H3>
                    <Buttons>
                        <ButtonR text="¡Quiero entrar al Negocio!" to="/business" />
                    </Buttons>
                    <H3>¿Te interesa la Salud / Alimentación?</H3>
                    <Buttons>
                        <ButtonR text="¡Quiero mejorar mi Salud!" to="/products" />
                    </Buttons>
                </ContactItem>
            </ContactBody>
            <H3>Mis Redes</H3>
            <Buttons>
                <ButtonWhatsapp mb="true" text="Ir a Whatsapp" />
                <ButtonMessenger mb="true" text="Ir a Messenger" />
                <ButtonFacebook mb="true" text="Ir a Facebook" />
            </Buttons>
        </ContactContainer>
    );
}
