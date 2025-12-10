import {
  createBrowserRouter,
  
} from "react-router-dom";
import Root from "./Root";
import Home from "./Components/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        }
    ]
  },
]);

export default Route;