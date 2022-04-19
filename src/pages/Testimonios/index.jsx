import { Section, Container, H1 } from "styles";
import { Outlet } from "react-router";

const TestimoniosContainer = ({ children }) => {
    return (
        <Section pdB="4rem">
            <Container>{children}</Container>
        </Section>
    );
};

export default function Testimonios() {
    return (
        <TestimoniosContainer>
            <H1>
                Casos de personas que lograron superar sus enfermedades con nuestros
                productos
            </H1>
            <Outlet />
        </TestimoniosContainer>
    );
}
