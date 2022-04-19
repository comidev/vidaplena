import { Section, Container, H1 } from "styles";
import { Lista, ListaItem, NegocioBody, NegocioInfo, NegocioTitle } from "./styles";
import Imagen from "components/Imagen";
import { Buttons, ButtonWhatsapp } from "components/Buttons";
import Texto from "components/Texto";

import imgNegocio01 from "images/perfil/negocio01.webp";
import imgNegocio02 from "images/perfil/negocio02.webp";
import imgNegocio03 from "images/perfil/negocio03.webp";

import CEO from "components/CEO";

const NegocioContainer = ({ children }) => {
    return (
        <Section>
            <CEO
                title="Negocio"
                description="Gana diversos bonos de dinero en efectivo, artículos techs. (iPad, Proyector, etc.), viajes como el último y más impactante que fue a Dubai por ..."
                URL={window.location.href}
                img={imgNegocio02}
                imgAlt="Negocio"
            />
            <Container>{children}</Container>
        </Section>
    );
};

export default function Negocio() {
    return (
        <NegocioContainer>
            <NegocioBody>
                <NegocioInfo>
                    <H1 start="true" maxwidth="40rem">
                        ¡Conoce el negocio!
                    </H1>
                    <Texto>
                        Hola, soy Washington Miranda, gracias a un malestar de salud
                        conocí este sistema de negocio y esta gran compañía con unos
                        maravillosos productos y con estos extraordinarios e
                        increíbles productos solucioné los problemas de salud y esto
                        generó un cambio en mí, encontré un equilibrio de vida en
                        todas las áreas.
                    </Texto>
                </NegocioInfo>
                <Imagen src={imgNegocio01} maxWidth="30rem" radius="0.2rem" />
            </NegocioBody>
            <NegocioBody>
                <Imagen src={imgNegocio03} maxWidth="30rem" radius="0.2rem" />
                <NegocioInfo>
                    <H1 start="true" maxwidth="33rem">
                        Realizando esta actividad
                    </H1>
                    <Texto>
                        Compartiendo con la gente, invitando a otros a disfrutar los
                        beneficios enseñando y guiando a todos los que quieren pude
                        ganarme diversos bonos de dinero en efectivo, artículos
                        tecnológicos (iPad, Proyector, etc.), viajes y el último y
                        más impactante fue a Dubai por 10 días con todos los gatos
                        pagados por esta gran compañía ¡Y este año 2022 viajamos a
                        Egipto!
                    </Texto>
                </NegocioInfo>
            </NegocioBody>
            <NegocioTitle>¿Qué te ofrezco para ti?</NegocioTitle>
            <Lista>
                <ListaItem>
                    Libertad de tiempo 'dueño y control de tu tiempo'
                </ListaItem>
                <ListaItem>
                    Negocio en expansión internacional (22 países) y bajo riego
                </ListaItem>
                <ListaItem>Ingresos y ganancias diarias, bonos, viajes</ListaItem>
                <ListaItem>Comisión quincenal e ilimitado</ListaItem>
                <ListaItem>Beneficios fiscales</ListaItem>
                <ListaItem>Desarrollo personal</ListaItem>
                <ListaItem>Productos únicos de alto impacto</ListaItem>
                <ListaItem>Nutrición, cosmética y cuidado personal</ListaItem>
            </Lista>
            <NegocioTitle>¿Te interesa el negocio?</NegocioTitle>
            <Imagen src={imgNegocio02} maxWidth="35rem" box="true" radius="0.4rem" />
            <Buttons mgTop="3rem">
                <ButtonWhatsapp
                    text="¡Quiero saber más sobre el negocio!"
                    msg="Buen día. He visitado su página web y tengo interés en ingresar al negocio."
                />
            </Buttons>
        </NegocioContainer>
    );
}
