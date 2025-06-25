import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Contact from "../Pages/contact";
import About from "../Pages/About";
import Project from "../Components/Projects/Projects";
import ErrorPage from "../Components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // contains <Outlet />
    errorElement: <ErrorPage />, // This handles route-level errors
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Project /> },
    ],
  },
]);
