import { Section, Container, H1 } from "styles";
import ShoppingMenu from "./CarritoCompras/ShoppingMenu";
import { Outlet } from "react-router";

import CEO from "components/CEO";
import producto from "images/logo/icon.png";
import Aviso from "./Preguntas";
import Certificaciones from "./Certificaciones";

const ProductosContainer = ({ children }) => {
    return (
        <Section pdB="4rem">
            <CEO
                title="Productos"
                description="Conoce nuestros productos, puede ver los detalles de cada uno, seleccionar el que desea y hacer su pedido. Recibirá mi asesoría para aprovechar mejor."
                URL={window.location.href}
                img={producto}
                imgAlt="Productos"
            />
            <Container>{children}</Container>
        </Section>
    );
};

export default function Productos() {
    return (
        <ProductosContainer>
            <H1>Nuestros productos</H1>
            <Aviso />
            <ShoppingMenu />
            <Outlet />
            <Certificaciones />
        </ProductosContainer>
    );
}
