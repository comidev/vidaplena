import {
    SlideContainer,
    SlideBackStyle,
    SlideInfo,
    SlideInfoTitleContainer,
    SlideInfoText,
    SlideButtonContainer,
    SlideInfoTitle,
} from "./styles";

import { ButtonR } from "components/Buttons";

export default function Slide({ bgImg, title, text, to, button }) {
    return (
        <SlideContainer bgImg={bgImg}>
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
