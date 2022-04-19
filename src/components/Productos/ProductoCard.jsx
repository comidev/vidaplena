import React from "react";
import { ProductoCardStyle, ButtonComprar, ComprarOpciones } from "./styles";
import { FaShoppingCart } from "react-icons/fa";
import useGlobalShopping from "hooks/useGlobalShopping";
import useCounter from "hooks/useCounter";
import Contador from "components/Contador";
import ProductoCardInfo from "./ProductoCardInfo";

function ProductoCard({ productName, img, content, description, price, type, id }) {
    const { cantidad, incrementar, decrementar, resetear } = useCounter();
    const { agregarProducto } = useGlobalShopping();

    const handleClickComprar = () => {
        if (cantidad > 0) {
            agregarProducto({
                cantidad: cantidad,
                productName: productName,
                content: content,
                description: description,
                price: price,
                type: type,
                id: id,
            });
            resetear();
        }
    };

    return (
        <ProductoCardStyle>
            <ProductoCardInfo
                productName={productName}
                img={img}
                content={content}
                id={id}
                price={price}
            />
            <ComprarOpciones>
                <Contador
                    cantidad={cantidad}
                    incrementar={incrementar}
                    decrementar={decrementar}
                />
                <ButtonComprar onClickCapture={handleClickComprar}>
                    <FaShoppingCart />
                </ButtonComprar>
            </ComprarOpciones>
        </ProductoCardStyle>
    );
}

export default React.memo(ProductoCard);
