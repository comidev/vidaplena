import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { COLORS } from "styles";
import { IconShop, CantidadNotificacion, Shopping, ListaResultados } from "./styles";
import useGlobalShopping from "hooks/useGlobalShopping";
import ButtonBuy from "./ButtonBuy";
import ListaContent from "./ListaContent";
import ListaCabecera from "./ListaCabecera";
import { useSelector } from "react-redux";

export default function ShoppingMenu() {
    const listaCompras = useSelector((state) => state.listaCompras);

    const [showListShopping, setShowListShopping] = useState(false);
    const [datosVenta, setDatosVenta] = useState({
        cantidadCompras: 0,
        precioTotal: 0,
    });
    const handleClickShowList = () => setShowListShopping(!showListShopping);

    useEffect(() => {
        let cantidadCompras = 0;
        let precioTotal = 0;
        listaCompras.forEach((item) => {
            cantidadCompras += item.cantidad;
            precioTotal += item.cantidad * item.price;
        });
        setDatosVenta({ cantidadCompras, precioTotal });
    }, [listaCompras]);

    const mensaje = `Buen día, señor Washington Miranda. Me gustaría adquirir los siguientes productos: ${listaCompras
        .map(
            (item) =>
                `${item.cantidad} ${item.productName} (formato: ${item.type} - ${
                    item.content
                })  de S/ ${item.price.toFixed(1)}`
        )
        .join(" || ")}. Con un costo total de S/ ${datosVenta.precioTotal.toFixed(
        1
    )}. Gracias.`;

    return (
        <Shopping right={showListShopping ? "0" : "-7.2rem"}>
            <IconShop
                onClick={handleClickShowList}
                bg={showListShopping ? COLORS.PRIMARY : "#000"}>
                {datosVenta.cantidadCompras > 0 ? (
                    <CantidadNotificacion>
                        {datosVenta.cantidadCompras}
                    </CantidadNotificacion>
                ) : (
                    <></>
                )}
                <FaShoppingCart />
            </IconShop>
            <ButtonBuy msg={datosVenta.cantidadCompras > 0 ? mensaje : ``} />
            <ListaResultados moverRight={showListShopping ? "0.9rem" : "-21rem"}>
                <ListaCabecera />
                <ListaContent
                    listaCompras={listaCompras}
                    precioTotal={datosVenta.precioTotal}
                />
            </ListaResultados>
        </Shopping>
    );
}
