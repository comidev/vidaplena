import styled from "@emotion/styled";
import { COLORS } from "styles";

export const SearchContainer = styled.form`
    display: flex;
    width: 100%;
    padding-left: 0.5rem;
    max-width: max-content;
    border-radius: 1rem;
    overflow: hidden;
    margin: 0 auto 2rem;

    background-color: ${COLORS.WHITE};
    border: 2px solid ${COLORS.PRIMARY};

    &:focus-within {
        box-shadow: 0px 0px 10px 0px ${COLORS.PRIMARY};
        border-color: transparent;
    }
`;

export const SearchText = styled.input`
    font-size: 0.8rem;
    height: 2rem;
`;
export const SearchIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    color: ${COLORS.PRIMARY};
`;
