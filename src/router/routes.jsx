import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import Contact from "../Components/Contact/contact";
import About from "../Components/About/About";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // contains <Outlet />
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
    ],
  },
]);
