import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import Register from "../components/Register";

const router =  createBrowserRouter([
    {path:"/",element:<MainLayout/>},
    {path:"/register",element:<Register/>}

])
export default router;