import logo from "images/logo/logo.png";
import { Link } from "react-router-dom";
import { Img } from "components/Imagen/styles.js";
import { LogoContainer } from "./styles.js";

export default function Logo() {
    return (
        <Link to="home">
            <LogoContainer>
                <Img src={logo} alt="LOGO" />
            </LogoContainer>
        </Link>
    );
}
