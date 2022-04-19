import React from "react";
import { Buttons, ButtonWhatsapp } from "components/Buttons";
import { AvisoFueraDePeru, AvisoProblemaDeSalud, AvisoEntrega } from "./styles";
function Preguntas() {
    return (
        <>
            <AvisoFueraDePeru>¿No eres de Perú?</AvisoFueraDePeru>
            <AvisoProblemaDeSalud>¿Tienes problemas de salud?</AvisoProblemaDeSalud>
            <AvisoEntrega>¿Cómo es la entrega en Perú?</AvisoEntrega>
            <Buttons mgTop="3rem">
                <ButtonWhatsapp
                    msg="Buen día. Tengo una pregunta: "
                    text="¿Más preguntas?"
                />
            </Buttons>
        </>
    );
}

export default React.memo(Preguntas);
