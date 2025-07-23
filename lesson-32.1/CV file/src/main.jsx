import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router";
import { ChakraProvider, createSystem, defaultConfig, defineConfig, } from "@chakra-ui/react"
import Home from "./pages/Home.jsx";
import Root from "./pages/Root.jsx";
import ToDosPage from "./pages/ToDosPage.jsx";
import SWAPI from "./pages/SWAPI.jsx";
import {Provider} from "./components/ui/provider.jsx";
// import {sizes} from "@chakra-ui/react/dist/types/theme/tokens/sizes.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/To Do List",
                element: <ToDosPage />
            },
            {
                path: "/SWAPI",
                element: <SWAPI />
            }
        ]
    },
]);

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                red: "#EE0F0F",
            },
            sizes: {
                containerWidth: "900px"
            }
        },
    },
})

const system = createSystem(defaultConfig, config)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider>
          <ChakraProvider value={system}>
              <RouterProvider router={router} />
          </ChakraProvider>
      </Provider>
  </StrictMode>,
)
