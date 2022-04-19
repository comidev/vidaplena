import { ImgContainer, Img } from "./styles";

export default function Imagen({ src, alt, maxWidth, radius, box, ratio }) {
    return (
        <ImgContainer maxWidth={maxWidth} radius={radius} box={box} ratio={ratio}>
            <Img src={src} alt={alt} />
        </ImgContainer>
    );
}
