import Header from "../components/Header.jsx";
import {Outlet} from "react-router";
import {Container} from "@chakra-ui/react";

function Root() {
    return (
        <>
            <Header />
            <Container maxWidth="6xl" px={4} py={8} fluid="true" color="blue.500">
                <Outlet />
            </Container>
        </>
    );
}

export default Root;