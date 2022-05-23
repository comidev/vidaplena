import ProductoPage from "components/Productos/ProductoPage";
import { PRODUCTS } from "data/productos";
import { useParams, Navigate } from "react-router-dom";

import CEO from "components/CEO";

export default function ProductosDetalles() {
    const { productoId } = useParams();
    const isNumber = Number.isInteger(Number(productoId));
    if (!isNumber || productoId >= PRODUCTS.length || productoId < 0) {
        return <Navigate to="/home" replace />;
    }

    const producto = PRODUCTS[productoId];

    return (
        <>
            <CEO
                title={producto.productName}
                description={producto.description[0]}
                URL={window.location.href}
                img={producto.img}
                imgAlt={producto.productName}
            />
            <ProductoPage
                productName={producto.productName}
                img={producto.img}
                content={producto.content}
                categorys={producto.categorys}
                description={producto.description}
                price={producto.price}
                type={producto.type}
                id={producto.id}
            />
        </>
    );
}
