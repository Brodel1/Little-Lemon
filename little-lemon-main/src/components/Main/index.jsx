import { Box } from "@chakra-ui/react";
import AlertMessage from "components/AlertMessage";
import Footer from "components/Footer";
import Header from "components/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <Box as="main">
            <Header />
            <Outlet />
            <Footer />
            <AlertMessage />
        </Box>
    )
}

export default Main;