import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import Register from "../components/Register";
import Login from "../components/Login";

const router =  createBrowserRouter([
    {path:"/",element:<MainLayout/>},
    {path:"/register",element:<Register/>},
    {path:"/login",element:<Login/>}

])
export default router;