import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import Root from "./pages/Root.jsx";
import Hotels from "./pages/Hotels.jsx";
// import {ChakraProvider} from "@chakra-ui/react";
import { Provider } from "./components/ui/provider"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/hotels",
                element: <Hotels />
            },
            {
                path: "/about",
                element: <About />
            },
        ],
    },
]);


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
)
