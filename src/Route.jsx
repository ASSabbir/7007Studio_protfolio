import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "./Root";
import Home from "./Components/Home";
import Services from "../src/Pages/Service/Services";
import OurStudio from "./Pages/OurStudio/OurStudio";




const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/our_studio',
                element: <OurStudio></OurStudio>
            },

        ]
    },
]);

export default Route;