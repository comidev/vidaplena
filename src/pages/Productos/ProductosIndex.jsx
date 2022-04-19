import { P, COLORS } from "styles";
import { ProductsBodyContainer, ProductosBody } from "./styles";
import ProductoCard from "components/Productos/ProductoCard";
import { PRODUCTS } from "data/productos.js";
import Buscador from "components/Buscador";
import useSearchProducts from "./useSearchProducts";
import Busquedas from "./Busquedas";

export default function ProductosIndex() {
    const { productsSearch, buscarProductoByCategory, buscarProductoByKeyword } =
        useSearchProducts();

    return (
        <>
            <Buscador onChange={buscarProductoByKeyword} />
            <ProductsBodyContainer>
                <div>
                    <P color={COLORS.TEXT}>Resultados: {productsSearch.length}</P>
                    <ProductosBody>
                        {productsSearch.map((producto) => (
                            <ProductoCard
                                productName={producto.productName}
                                img={producto.img}
                                content={producto.content}
                                categorys={producto.categorys}
                                description={producto.description}
                                price={producto.price}
                                type={producto.type}
                                id={PRODUCTS.indexOf(producto)}
                                key={producto.id}
                            />
                        ))}
                    </ProductosBody>
                </div>
                <Busquedas onClick={buscarProductoByCategory} />
            </ProductsBodyContainer>
        </>
    );
}
