import React from "react";
import { SearchContainer, SearchText, SearchIcon } from "./styles";
import { FiSearch } from "react-icons/fi";

function Search({ onChange }) {
    return (
        <SearchContainer
            onSubmit={(e) => e.preventDefault()}
            role="search"
            noValidate>
            <SearchIcon>
                <FiSearch />
            </SearchIcon>
            <SearchText
                type="search"
                maxLength="512"
                onChange={onChange}
                placeholder="Buscar..."
            />
        </SearchContainer>
    );
}

export default React.memo(Search);
