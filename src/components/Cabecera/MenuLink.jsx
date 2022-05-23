import React from "react";
import { NavLi, Link, Icon } from "./styles.js";
import { COLORS } from "styles";

const activeStyle = ({ isActive }) => {
    return isActive
        ? {
              backgroundColor: `${COLORS.WHITE}33`,
          }
        : {};
};

function MenuLink({ to, icon, pageName, onClick }) {
    return (
        <NavLi onClick={onClick}>
            <Link to={to} style={activeStyle}>
                {icon && <Icon>{icon}</Icon>}
                {pageName}
            </Link>
        </NavLi>
    );
}
export default React.memo(MenuLink);
