import React from "react";
import { ButtonWhatsapp } from "components/Buttons";

function ButtonBuy({ msg }) {
    return <ButtonWhatsapp text="Comprar" msg={msg} mr="0" />;
}

export default React.memo(ButtonBuy);
