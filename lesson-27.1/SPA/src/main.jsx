import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router"
import './index.css'
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Faq from "./pages/Faq.jsx";
import Contact from "./pages/Contact.jsx";
import Root from "./pages/Root.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";


const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <ErrorPage />,
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/About",
				element: <About />,
			},
			{
				path: "/FAQ",
				element: <Faq />,
			},
			{
				path: "/Contact",
				element: <Contact />,
			}
		],
	},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
	  <RouterProvider router={router} />
  </StrictMode>,
)
