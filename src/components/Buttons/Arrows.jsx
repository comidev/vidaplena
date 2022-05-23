import styled from "@emotion/styled";
import { COLORS } from "styles";

const Button = styled.button`
    height: 100%;
    padding: 0;
    background-color: transparent;
    & svg {
        fill: ${COLORS.WHITE};


        &:hover {
            cursor: pointer;
            fill: ${COLORS.GOLD};
        }
    }
`;

export function ArrowLeft({ onClick }) {
    return (
        <Button onClick={onClick}>
            <svg
                class="icon icon-arrow-left"
                viewBox="0 0 27 46"
                width="100%"
                height="100%">
                <path d="M7.485 23.042l17.678 17.677a3 3 0 0 1-4.243 4.243L1.121 25.163a3 3 0 0 1 0-4.243l19.8-19.799a3 3 0 1 1 4.242 4.243L7.485 23.042z"></path>
            </svg>
        </Button>
    );
}

export function ArrowRight({ onClick }) {
    return (
        <Button onClick={onClick}>
            <svg
                class="icon icon-arrow-right"
                viewBox="0 0 26 46"
                width="100%"
                height="100%">
                <path d="M18.598 23.042L.92 5.364a3 3 0 0 1 4.243-4.243l19.799 19.8a3 3 0 0 1 0 4.242L5.163 44.962A3 3 0 0 1 .92 40.719l17.678-17.677z"></path>
            </svg>
        </Button>
    );
}
