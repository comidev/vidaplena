import { IconMenu } from "./styles";
import { MenuLinkList } from "./styles.js";

import { PAGES } from "data/index.js";

import { TiThMenu } from "react-icons/ti";
import { CgClose } from "react-icons/cg";
import MenuLink from "./MenuLink";
import useToggleMenu from "../../hooks/useToggleMenu.jsx";

export default function NavMenu() {
    const { isOpen, moveMenu, cerrar } = useToggleMenu();

    return (
        <>
            <MenuLinkList move={isOpen ? "0.5rem" : "-20rem"}>
                {PAGES.map((pag, index) => (
                    <MenuLink
                        to={pag.to}
                        icon={pag.icon}
                        pageName={pag.pageName}
                        onClick={cerrar}
                        key={index}
                    />
                ))}
            </MenuLinkList>
            <IconMenu onClick={moveMenu}>
                {isOpen ? <CgClose /> : <TiThMenu />}
            </IconMenu>
        </>
    );
}
