import { useCallback, useState } from "react";
import { PRODUCTS } from "data/productos.js";

export default function useSearchProducts() {
    const [productsSearch, setProductsSearch] = useState(PRODUCTS);

    const buscarProductoByCategory = useCallback(
        (texto) =>
            setProductsSearch(
                PRODUCTS.filter((item) => item.categorys.includes(texto))
            ),
        []
    );

    const buscarProductoByKeyword = useCallback((e) => {
        const keyword = e.target.value;
        if (keyword) {
            const keywordLower = e.target.value.toLowerCase();
            const keywordUpper =
                keywordLower[0].toUpperCase() + keywordLower.slice(1);
            const findKeyword = (item) =>
                item.productName.includes(keywordLower) ||
                item.productName.includes(keywordUpper) ||
                item.type.includes(keywordLower) ||
                item.type.includes(keywordUpper) ||
                item.categorys.some(
                    (category) =>
                        category.includes(keywordLower) ||
                        category.includes(keywordUpper)
                ) ||
                item.description.some(
                    (description) =>
                        description.includes(keywordLower) ||
                        description.includes(keywordUpper)
                );
            setProductsSearch(PRODUCTS.filter(findKeyword));
        } else {
            setProductsSearch(PRODUCTS);
        }
    }, []);

    return { productsSearch, buscarProductoByCategory, buscarProductoByKeyword };
}
