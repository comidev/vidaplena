import React from "react";
import { NavLi, Link, Icon } from "./styles.js";
import { COLORS } from "styles";

function MenuLink({ to, icon, pageName, onClick }) {
    const activeStyle = ({ isActive }) => {
        return {
            borderBottom: `3px solid ${isActive ? COLORS.WHITE : "transparent"}`,
        };
    };
    return (
        <NavLi onClick={onClick}>
            <Link to={to} style={activeStyle}>
                {icon && <Icon>{icon}</Icon>}
                <span>{pageName}</span>
            </Link>
        </NavLi>
    );
}
export default React.memo(MenuLink);
