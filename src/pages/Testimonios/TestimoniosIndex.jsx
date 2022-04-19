import { useState, useCallback } from "react";
import { TestimoniosBody } from "./styles";

import TestimonioCard from "components/Testimonio/TestimonioCard";
import { Buttons, Button } from "components/Buttons";

import { TESTIMONIOS_SALUD } from "data/testimonios.js";

import TestimoniosHeader from "./TestimoniosHeader";

export default function TestimoniosIndex() {
    const [itemsFilter, setItemsFilter] = useState(TESTIMONIOS_SALUD);

    const START_SIZE = (FULL_SIZE) => (FULL_SIZE > 6 ? 6 : FULL_SIZE);

    const [itemsPart, setItemsPart] = useState(
        itemsFilter.slice(0, START_SIZE(itemsFilter.length))
    );

    const aumentarCantidad = () =>
        setItemsPart((prev) => {
            const aumento = 3;
            const FULL_SIZE = itemsFilter.length;
            const PART_SIZE = prev.length;
            const faltante = FULL_SIZE - PART_SIZE;
            const NEW_PART_SIZE =
                PART_SIZE + (faltante >= aumento ? aumento : faltante);
            return itemsFilter.slice(0, NEW_PART_SIZE);
        });

    const filtrarItems = useCallback((e) => {
        const categoria = e.target.value;
        setItemsFilter(() => {
            const newItemsFilter =
                categoria === "Todo"
                    ? TESTIMONIOS_SALUD
                    : TESTIMONIOS_SALUD.filter(
                          (item) => item.category === categoria
                      );
            setItemsPart(newItemsFilter.slice(0, START_SIZE(newItemsFilter.length)));
            return newItemsFilter;
        });
    }, []);

    return (
        <>
            <TestimoniosHeader onChange={filtrarItems} size={itemsFilter.length} />
            <TestimoniosBody>
                {itemsPart.map((item) => (
                    <TestimonioCard
                        img={item.imgs[0]}
                        title={item.title}
                        category={item.category}
                        description={item.description}
                        products={item.products}
                        index={`${TESTIMONIOS_SALUD.indexOf(item)}`}
                    />
                ))}
            </TestimoniosBody>
            {itemsFilter.length <= itemsPart.length || (
                <Buttons>
                    <Button text="Ver más" onClick={aumentarCantidad} />
                </Buttons>
            )}
        </>
    );
}
