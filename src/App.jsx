import NavBar from "components/Cabecera";
import Footer from "components/Footer";
import { ShoppingContextProvider } from "context/ShoppingContext";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { Main } from "styles";
import { COLORS } from "styles";
import styled from "@emotion/styled";
import { store } from "redux/store";

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
                <Provider store={store}>
                    <NavBar />
                    <Main>
                        <Outlet />
                    </Main>
                    <Footer />
                </Provider>
            </ShoppingContextProvider>
        </AppStyle>
    );
}

export default App;
