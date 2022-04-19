import NavBar from "components/Cabecera";
import Footer from "components/Footer";
import { ShoppingContextProvider } from "context/ShoppingContext";
import { Outlet } from "react-router-dom";

import { Main } from "styles";
import { COLORS } from "styles";
import styled from "@emotion/styled";

const AppStyle = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: ${COLORS.WHITE};
`;

function App() {
    return (
        <AppStyle>
            <ShoppingContextProvider>
                <NavBar />
                <Main>
                    <Outlet />
                </Main>
                <Footer />
            </ShoppingContextProvider>
        </AppStyle>
    );
}

export default App;
