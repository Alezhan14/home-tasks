import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
// import './index.css'
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import Root from "./pages/Root.jsx";
import Hotels from "./pages/Hotels.jsx";
import {ChakraProvider, createSystem, defaultConfig, defineConfig} from "@chakra-ui/react";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/hotels",
                element: <Hotels/>
            },
            {
                path: "/about",
                element: <About/>
            },
        ],
    },
]);

const config = defineConfig({
    theme: {
        tokens: {
            colors: {

            },
        },
    },
})

const system = createSystem(defaultConfig, config)


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ChakraProvider  value={system}>
                <RouterProvider router={router}/>
        </ChakraProvider >
    </StrictMode>
)
