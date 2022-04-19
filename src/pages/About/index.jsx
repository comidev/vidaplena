import { Section, H1, Container } from "styles";
import { AboutBody, Imagenes, AboutInfo } from "./styles.js";
import Imagen from "components/Imagen";
import { Buttons, ButtonR } from "components/Buttons";
import Texto from "components/Texto";

import about01 from "images/perfil/about01.webp";
import about02 from "images/perfil/about02.webp";
import about03 from "images/perfil/about03.webp";

import CEO from "components/CEO";

const AboutContainer = ({ children }) => {
    return (
        <Section pdB="6rem">
            <CEO
                title="Acerca de"
                description="Hola, soy Washington Miranda. Hace 11 años atrás tenía estrés crónico, depresión, ansiedad, insomnio, dolores de cabeza, mareos, calambres, tics..."
                URL={window.location.href}
                img={about02}
                imgAlt="Imagen de Acerca de."
            />
            <Container>{children}</Container>
        </Section>
    );
};

export default function About() {
    return (
        <AboutContainer>
            <AboutBody>
                <AboutInfo>
                    <H1 start="true" maxwidth="33rem">
                        Hola, soy Washington Miranda
                    </H1>
                    <Texto>
                        Hace 11 años atrás tenía estrés crónico, depresión, ansiedad,
                        insomnio, dolores de cabeza, mareos, calambres, tics
                        nervioso, tuve parálisis facial de media cara (derrame
                        facial).
                    </Texto>
                    <Texto>
                        Tomé diversos tratamientos alternativos naturistas, hiervas,
                        masajistas, quiropraxia, acupuntura, baños medicinales, pasé
                        por todos los consultorios y en neuro-cirugía me ordenaron
                        sacarme una resonancia magnética.
                    </Texto>
                    <Texto>
                        Me encontraron hernia de disco en la columna L5, L4, se me
                        agudizó todo y llegué hasta psiquiatría, me recetaron para
                        dormir clonasepan por las mañanas sertralina, y los tomé 7
                        meses hasta que conocí estos productos.
                    </Texto>
                    <Imagen
                        src={about03}
                        alt={"Img Paralisis"}
                        radius="0.8rem"
                        maxWidth="10rem"
                    />
                    <Texto>
                        Y con estos maravillosos productos, una alimentación
                        balanceada y un cambio en mi actitud el desequilibrio,
                        desorden, trastornos y malestares en mi cuerpo los corregí y
                        sané, y hoy disfruto de una buena calidad de vida. Gracias a
                        estos increíbles productos.
                    </Texto>
                </AboutInfo>
                <Imagenes>
                    <Imagen
                        src={about01}
                        alt={"Img About"}
                        radius="0.4rem"
                        maxWidth="25rem"
                    />
                    <Imagen
                        src={about02}
                        alt={"Img About"}
                        radius="0.4rem"
                        maxWidth="25rem"
                    />
                </Imagenes>
            </AboutBody>
            <Texto center="true">
                ¿Tienes algún de problema de salud? ¿Quieres conocer un gran negocio
                que puede cambiar tu vida?
            </Texto>
            <Buttons mgTop="1rem">
                <ButtonR to={"/contact"} text="Contáctame" />
            </Buttons>
        </AboutContainer>
    );
}
