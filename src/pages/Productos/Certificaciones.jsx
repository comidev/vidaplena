import { CertificacionesContainer } from "./styles";
import { H1 } from "styles";
import Imagen from "components/Imagen";
import certificaciones from "images/perfil/certificaciones.webp";

export default function Certificaciones() {
    return (
        <CertificacionesContainer>
            <H1>Certificaciones</H1>
            <Imagen src={certificaciones} maxWidth="40rem" />
        </CertificacionesContainer>
    );
}
