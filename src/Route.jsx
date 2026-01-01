import {
  createBrowserRouter,

} from "react-router-dom";
import Root from "./Root";
import Home from "./Components/Home";
import Services from "../src/Pages/Service/Services";
import CaseStudy from "../src/Pages/CaseStudy/CaseStudy";
import ClientReview from "../src/Pages/ClientReview/ClientReview";
import Contct from "./Pages/Contact/Contct";
import OurStudio from "./Pages/OurStudio/OurStudio";
import ContactPage from "./Pages/Contact/ContactPage";




const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/services',
            element: <Services></Services>
        },
        {
            path:'/our_studio',
            element:<OurStudio></OurStudio>
        },
        

        {
            path:'/contact',
            element:<ContactPage></ContactPage>
        },
    ]
  },
]);

export default Route;