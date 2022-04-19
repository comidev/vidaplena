import { BsMessenger, BsFacebook } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { FaShoppingCart, FaUser, FaPhoneVolume } from "react-icons/fa";
import { RiVipDiamondFill } from "react-icons/ri";

import productosImg from "images/perfil/slideProducto.webp";
import productosImg2 from "images/perfil/slideProducto2.webp";
import negocioImg from "images/perfil/slideNegocio.webp";
import negocioImg2 from "images/perfil/slideNegocio2.webp";
import sobreMiImg from "images/perfil/slideAbout.webp";
import sobreMiImg2 from "images/perfil/slideAbout2.webp";

export const DATA_SLIDE = [
    {
        img: sobreMiImg,
        img2: sobreMiImg2,
        title: "¡Bienvenido!",
        button: "Seguir leyendo",
        text: "Hola, soy Washington Miranda. Hace 11 años atrás tenía estrés crónico, depresión, ansiedad, insomnio, dolores de cabeza, mareos, calambres, tics nervioso, tuve parálisis facial de media cara (derrame facial). Tomé diversos tratamientos alternativos naturistas, hiervas ...",
        to: "/about",
    },
    {
        img: productosImg,
        img2: productosImg2,
        title: "Productos",
        button: "Ver productos",
        text: "Conoce nuestros productos y haga sus pedidos. Recibirá mi asesoría para aprovechar mejor los nutrientes. ¡Además, puede obtener un descuento de 20% o hasta un 40%! Hacemos entrega en Lima y envíos a todo Perú. ¿No estás en Perú? Descuida, puedes hacer la compra online desde tu país",
        to: "/products",
    },
    {
        img: negocioImg,
        img2: negocioImg2,
        title: "Negocio",
        button: "Ver negocio",
        text: "Te invito a este negocio en donde ganarás diversos bonos de dinero en efectivo, artículos tecnológicos (iPad, Proyector, etc.), viajes y el último y más impactante fue a Dubai por 10 días todos los gastos pagado por esta gran compañía ¡Y este año 2022 viajamos a Egipto!",
        to: "/business",
    },
];

export const getCategorys = (list) => {
    const listCategorySort = list.sort();
    const listCategoryFilter = listCategorySort.filter(
        (item, index) => listCategorySort[index - 1] !== item
    );

    return listCategoryFilter;
};

export const RRSS = [
    {
        src: "https://api.whatsapp.com/send?phone=51989949611",
        text: "(+51) 989 949 611",
        icon: <ImWhatsapp />,
        color: "#fff",
        bg: "rgb(37,211,102)",
        bgRgb: "37,211,102",
    },

    {
        src: "https://m.me/WashingtonMirandaC",
        text: "Washington Miranda",
        icon: <BsMessenger />,
        color: "#fff",
        bg: "linear-gradient(60deg, rgb(0,106,255), rgb(255,119,110))",
        bgRgb: "0,106,255",
    },
    {
        src: "https://www.facebook.com/WashingtonMirandaC",
        text: "/WashingtonMirandaC",
        icon: <BsFacebook />,
        color: "#fff",
        bg: "rgb(66,103,178)",
        bgRgb: "66,103,178",
    },
];

export const PAGES = [
    {
        to: "home",
        pageName: "Inicio",
        icon: <AiFillHome />,
    },
    {
        to: "products",
        pageName: "Productos",
        icon: <FaShoppingCart />,
    },
    {
        to: "business",
        pageName: "Negocio",
        icon: <RiVipDiamondFill />,
    },
    {
        to: "about",
        pageName: "Acerca de",
        icon: <FaUser />,
    },
    {
        to: "contact",
        pageName: "Contacto",
        icon: <FaPhoneVolume />,
    },
];
