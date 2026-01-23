import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Components/Home";
import Services from "../src/Pages/Service/Services";
import OurStudio from "./Pages/OurStudio/OurStudio";
import ScrollToTop from "./Components/ScrollToTop";

const Route = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Root />
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/our_studio", element: <OurStudio /> },
    ],
  },
]);

export default Route;
