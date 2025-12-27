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
            path:'/client_review',
            element:<ClientReview></ClientReview>
        },
        {
            path:'/contact',
            element:<Contct></Contct>
        },
    ]
  },
]);

export default Route;