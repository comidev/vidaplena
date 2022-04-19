import {
    TestimonioContainer,
    Label,
    Products,
    Product,
    ImagenesContainer,
    ImagenContainer,
} from "./styles";
import { H2, P, COLORS } from "styles";
import { Img } from "components/Imagen/styles";

function TestimonioPage({
    imgs,
    title,
    category,
    description,
    description2,
    products,
}) {
    return (
        <TestimonioContainer>
            <H2>{title}</H2>
            <Label bg={COLORS.BLUE}>{category}</Label>
            <P color={COLORS.TEXT}>{description}</P>
            <P color={COLORS.TEXT}>{description2}</P>
            <Products>
                {products.map((item, index) => (
                    <Product bg={COLORS.RANDOMS[index % COLORS.RANDOMS.length]}>
                        {item}
                    </Product>
                ))}
            </Products>
            <ImagenesContainer>
                {imgs.map((img) => (
                    <ImagenContainer>
                        <Img src={img} alt={title} />
                    </ImagenContainer>
                ))}
            </ImagenesContainer>
        </TestimonioContainer>
    );
}

export default TestimonioPage;
