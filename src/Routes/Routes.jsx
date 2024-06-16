import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheakOut from "../Pages/CheakOut/CheakOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivetRoutes from "./PrivetRoutes";

const router =createBrowserRouter([
   {
    path:"/",
    element:<MainLayout></MainLayout>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:'/cheakout/:id',
            element:<PrivetRoutes><CheakOut></CheakOut></PrivetRoutes> ,
            loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`),
        },
        {
            path:'/bookings',
            element: <PrivetRoutes> <Bookings></Bookings></PrivetRoutes>
        }
    ]
   }
])

export default router;