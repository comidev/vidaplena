import { LinkRStyle, LinkAStyle, Icon } from "./styles";

export function LinkR({ to, color = "#fff", icon, linkName, hover }) {
    return (
        <LinkRStyle hover={hover} to={to} color={color}>
            {icon && <Icon>{icon}</Icon>}
            <span>{linkName}</span>
        </LinkRStyle>
    );
}

export function LinkA({ href, color = "#fff", colorIcon, icon, linkName, hover }) {
    return (
        <LinkAStyle hover={hover} href={href} color={color} target="_blank">
            {icon && <Icon color={colorIcon}>{icon}</Icon>}
            <span>{linkName}</span>
        </LinkAStyle>
    );
}
