import { Section, Container } from "styles";

import {
    HomeBody,
    HomeTitle,
    HomeArticle,
    HomeSubtitle,
    HomeSection,
} from "./styles";

import Slides from "components/Slides/Slides";
import Slide from "components/Slides/Slide";

import imgHome from "images/perfil/home.webp";
import Texto from "components/Texto";
import Imagen from "components/Imagen";
import { DATA_SLIDE } from "data";

import CEO from "components/CEO";
import img from "images/logo/icon.png";

const HomeContainer = ({ children, bgImg }) => {
    return <Section bgImg={bgImg}>{children}</Section>;
};

export default function Home() {
    return (
        <>
            <CEO
                title="Inicio"
                description="¡Bienvenido a Vida Plena! Es un estilo de vida en donde buscamos el desarrollo y el mejor estado de la persona, tratando cuatro pilares: Salud, ..."
                subject="Salud, economía, desarrollo personal y libertad de tiempo"
                URL={window.location.href}
                img={img}
                imgAlt="Imagen de Incio."
            />
            <Slides>
                {DATA_SLIDE.map((item, index) => (
                    <Slide
                        bgImg={item.img}
                        title={item.title}
                        text={item.text}
                        to={item.to}
                        button={item.button}
                        key={index}
                    />
                ))}
            </Slides>
            <HomeContainer>
                <Container>
                    <HomeTitle>¿Qué es Vida Plena?</HomeTitle>
                    <Texto center="true">
                        Es un estilo de vida en donde buscamos el desarrollo y el
                        mejor estado de la persona, tratando cuatro pilares: Salud,
                        economía , desarrollo personal y libertad de tiempo.
                    </Texto>
                    <HomeBody>
                        <HomeSection>
                            <HomeArticle>
                                <HomeSubtitle>Salud</HomeSubtitle>
                                <Texto
                                    center="true"
                                    fontSize="0.85rem"
                                    lineHeight="1.65rem"
                                    mgTB="1rem">
                                    Es disfrutar tú y tu familia de un estado de
                                    salud alcalino, sano y fuerte, y que todos gosen
                                    de calidad de vida desde recién nacidos hasta
                                    adultos.
                                </Texto>
                            </HomeArticle>
                            <HomeArticle>
                                <HomeSubtitle>Economía</HomeSubtitle>
                                <Texto
                                    center="true"
                                    fontSize="0.85rem"
                                    lineHeight="1.65rem"
                                    mgTB="1rem">
                                    Es que tengas buenos y muchas fuentes de
                                    ingresos, tranquilidad económica y que construya
                                    un patrimonio económico heredable para su familia
                                    e hijos.
                                </Texto>
                            </HomeArticle>
                            <HomeArticle>
                                <HomeSubtitle>Desarrollo personal</HomeSubtitle>
                                <Texto
                                    center="true"
                                    fontSize="0.85rem"
                                    lineHeight="1.65rem"
                                    mgTB="1rem">
                                    Es clave el crecimiento personal, la paz mental,
                                    felicidad y desarrollo de su ser para cumplir su
                                    propósito de vida.
                                </Texto>
                            </HomeArticle>
                            <HomeArticle>
                                <HomeSubtitle>Libertad</HomeSubtitle>
                                <Texto
                                    center="true"
                                    fontSize="0.85rem"
                                    lineHeight="1.65rem"
                                    mgTB="1rem">
                                    ¿Le gustaría gozar de tiempo, dinero y salud para
                                    ir dónde quiera, con quién quiera y cuándo
                                    quiera?
                                </Texto>
                            </HomeArticle>
                        </HomeSection>
                        <Imagen
                            src={imgHome}
                            radius="0.8rem"
                            maxWidth="25rem"
                            alt="Imagen de inicio"
                        />
                    </HomeBody>
                </Container>
            </HomeContainer>
        </>
    );
}
