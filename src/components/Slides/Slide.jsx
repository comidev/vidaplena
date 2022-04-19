import {
    SlideContainer,
    SlideBackStyle,
    SlideInfo,
    SlideInfoTitleContainer,
    SlideInfoText,
    SlideButtonContainer,
    SlideInfoTitle,
    SlideImageContainer,
    SlideImage,
} from "./styles";

import { ButtonR } from "components/Buttons";

export default function Slide({ bgImg, title, text, to, button }) {
    return (
        <SlideContainer>
            <SlideImageContainer>
                <SlideImage src={bgImg} />
            </SlideImageContainer>
            <SlideBackStyle>
                <SlideInfo>
                    <SlideInfoTitle>
                        <SlideInfoTitleContainer to={to}>
                            {title}
                        </SlideInfoTitleContainer>
                    </SlideInfoTitle>
                    <SlideInfoText>{text}</SlideInfoText>
                    <SlideButtonContainer>
                        <ButtonR text={button} to={to} />
                    </SlideButtonContainer>
                </SlideInfo>
            </SlideBackStyle>
        </SlideContainer>
    );
}
