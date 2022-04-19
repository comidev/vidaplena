import { Nav, NavContainer } from "./styles.js";
import Logo from "./Logo";
import NavMenu from "./NavMenu.jsx";

export default function NavBar() {
    return (
        <Nav>
            <NavContainer>
                <Logo />
                <NavMenu />
            </NavContainer>
        </Nav>
    );
}
