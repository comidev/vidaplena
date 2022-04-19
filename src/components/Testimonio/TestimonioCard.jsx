import React from "react";
import {
    TestimonioContainer,
    TestimonioBody,
    Label,
    Products,
    Product,
} from "./styles";
import { H4, P, COLORS } from "styles";
import Imagen from "components/Imagen";
import { Buttons, ButtonR } from "components/Buttons";

function TestimonioCard({ img, title, category, description, products, index }) {
    return (
        <TestimonioContainer>
            <Imagen src={img} alt={title} radius="1rem" />
            <TestimonioBody>
                <H4>{title}</H4>
                <Label bg={COLORS.BLUE}>{category}</Label>
                <P color={COLORS.TEXT}>{description.slice(0, 250) + " (...)"}</P>
                <Products>
                    {products.map((item, index) => (
                        <Product bg={COLORS.RANDOMS[index]}>{item}</Product>
                    ))}
                </Products>
            </TestimonioBody>
            <Buttons pdB="0rem">
                <ButtonR to={index} text="Ver caso" />
            </Buttons>
        </TestimonioContainer>
    );
}

export default React.memo(TestimonioCard);
