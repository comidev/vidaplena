import { RRSS } from "data";
import { ButtonLink, ButtonRStyle, ButtonsStyle, ButtonStyle } from "./styles";

export function Buttons({ children, mgTop, pdB }) {
    return (
        <ButtonsStyle mgTop={mgTop} pdB={pdB}>
            {children}
        </ButtonsStyle>
    );
}

export function Button({ text, onClick }) {
    return <ButtonStyle onClick={onClick}>{text}</ButtonStyle>;
}

export function ButtonR({ text, to }) {
    return <ButtonRStyle to={to}>{text}</ButtonRStyle>;
}

export function ButtonFacebook({ text, mb }) {
    return (
        <ButtonLink
            mb={mb}
            href={RRSS[2].src}
            bg={RRSS[2].bg}
            bgRgb={RRSS[2].bgRgb}
            target="_blank">
            {text}
        </ButtonLink>
    );
}
export function ButtonMessenger({ text, mb }) {
    return (
        <ButtonLink
            mb={mb}
            href={RRSS[1].src}
            bg={RRSS[1].bg}
            bgRgb={RRSS[1].bgRgb}
            target="_blank">
            {text}
        </ButtonLink>
    );
}
export function ButtonWhatsapp({ text, msg, mr, mb }) {
    return (
        <ButtonLink
            mb={mb}
            href={`${RRSS[0].src}${msg ? `&text=${msg}` : ``}`}
            bg={RRSS[0].bg}
            bgRgb={RRSS[0].bgRgb}
            mr={mr}
            target="_blank">
            {text}
        </ButtonLink>
    );
}
