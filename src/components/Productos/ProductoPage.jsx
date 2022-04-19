import { H3, COLORS } from "styles";
import Imagen from "components/Imagen";
import {
    ProductoCategorias,
    Description,
    PreciosContainer,
    PrecioItem,
    DescLabel,
    ButtonComprar,
    ProductoPageStyle,
    ProductoPageInfo,
    ProductoDescription,
    ComprarOpcionesPage,
    ProductoVenta,
    ProductPageHeader,
} from "./styles";
import { Label } from "components/Testimonio/styles";
import { FaShoppingCart } from "react-icons/fa";

import useGlobalShopping from "hooks/useGlobalShopping";
import useCounter from "hooks/useCounter";
import Contador from "components/Contador";

export default function ProductoPage({
    productName,
    img,
    content,
    categorys,
    description,
    price,
}) {
    const { cantidad, incrementar, decrementar, resetear } = useCounter();
    const { agregarProducto } = useGlobalShopping();

    const handleClickComprar = () => {
        agregarProducto({
            cantidad: cantidad,
            productName: productName,
            content: content,
            description: description,
            price: price,
        });
        resetear();
    };

    return (
        <ProductoPageStyle>
            <ProductPageHeader>
                <H3>{productName}</H3>
                <Label mgTop="1rem" bg={COLORS.BLUE}>
                    {content}
                </Label>
                <Imagen src={img} alt={productName} maxWidth="25rem" ratio="1" />
            </ProductPageHeader>
            <ProductoPageInfo>
                <ProductoCategorias>
                    {categorys.map((item, index) => (
                        <Label bg={COLORS.RANDOMS[index]} key={index}>
                            {item}
                        </Label>
                    ))}
                </ProductoCategorias>
                <ProductoDescription>
                    {description.map((item, index) => (
                        <Description key={index}>{item}</Description>
                    ))}
                </ProductoDescription>
                <ProductoVenta>
                    <PreciosContainer>
                        <PrecioItem>
                            Precio: <Label bg={COLORS.PRIMARY}>S/ {price}</Label>
                        </PrecioItem>
                        <PrecioItem>
                            Descuento:{" "}
                            <Label bg={COLORS.RED}>
                                S/ {(0.8 * price).toFixed(1)}
                                <DescLabel bg={COLORS.SUCCESS}>20%</DescLabel>
                            </Label>
                        </PrecioItem>
                        <PrecioItem>
                            Descuento 40%:{" "}
                            <Label bg={COLORS.GOLD}>
                                S/ {(0.6 * price).toFixed(1)}
                                <DescLabel bg={COLORS.SUCCESS}>40%</DescLabel>
                            </Label>
                        </PrecioItem>
                    </PreciosContainer>
                    <ComprarOpcionesPage>
                        <Contador
                            cantidad={cantidad}
                            incrementar={incrementar}
                            decrementar={decrementar}
                        />
                        <ButtonComprar onClickCapture={handleClickComprar}>
                            <FaShoppingCart />
                        </ButtonComprar>
                    </ComprarOpcionesPage>
                </ProductoVenta>
            </ProductoPageInfo>
        </ProductoPageStyle>
    );
}
