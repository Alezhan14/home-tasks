import Header from "../components/Header.jsx";
import {Outlet} from "react-router";

function Root() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default Root;