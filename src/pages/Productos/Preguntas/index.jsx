import { useState } from "react";
import Preguntas from "./Preguntas";
import {
    AvisoContainer,
    MostrarFondo,
    MostrarBoton,
    PreguntaContainer,
} from "./styles";

export default function Aviso() {
    const [mostrar, setMostrar] = useState(true);
    const handleClick = () => setMostrar(!mostrar);

    return (
        <AvisoContainer>
            <MostrarFondo onClick={handleClick}>
                <MostrarBoton>¿?</MostrarBoton>
            </MostrarFondo>
            <PreguntaContainer move={mostrar ? "0" : "-17rem"}>
                <Preguntas />
            </PreguntaContainer>
        </AvisoContainer>
    );
}
