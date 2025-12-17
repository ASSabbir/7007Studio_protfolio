import {
  createBrowserRouter,

} from "react-router-dom";
import Root from "./Root";
import Home from "./Components/Home";
import Services from "../src/Pages/Service/Services";
import CaseStudy from "../src/Pages/CaseStudy/CaseStudy";
import ClientReview from "../src/Pages/ClientReview/ClientReview";
import Contct from "./Pages/Contact/Contct";



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
            path:'/case_study',
            element: <CaseStudy></CaseStudy>
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