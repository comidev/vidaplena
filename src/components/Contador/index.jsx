import {
    ContadorContainer,
    ContadorButtons,
    ContadorButton,
    ContadorValor,
} from "./styles.js";

export default function Contador({ cantidad, incrementar, decrementar }) {
    const isTablet = window.innerWidth <= 760;

    if (isTablet) {
        return (
            <ContadorContainer consola="true">
                <ContadorButton consola="true" onClick={decrementar}>
                    -
                </ContadorButton>
                <ContadorValor value={cantidad} disabled />
                <ContadorButton consola="true" onClick={incrementar}>
                    +
                </ContadorButton>
            </ContadorContainer>
        );
    }

    return (
        <ContadorContainer>
            <ContadorValor value={cantidad} disabled />
            <ContadorButtons>
                <ContadorButton onClick={incrementar}>+</ContadorButton>
                <ContadorButton onClick={decrementar}>-</ContadorButton>
            </ContadorButtons>
        </ContadorContainer>
    );
}
