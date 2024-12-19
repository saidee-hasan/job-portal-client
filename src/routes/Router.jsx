import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import Register from "../components/Register";
import Login from "../components/Login";
import Home from "../pages/Home";
import JobsDeatils from "../components/JobsDetails";
import JobsDetails from "../components/JobsDetails";
import PrivateRoute from "./PrivateRoute";

const router =  createBrowserRouter([
    {path:"/",element:<MainLayout/>,children:[
        {path:"/",element:<Home/>,loader:()=> fetch('http://localhost:5000/jobs')},
        {path:"/jobs/:id",element:<PrivateRoute><JobsDetails/></PrivateRoute>  ,loader:({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)},
    ]},
    {path:"/register",element:<Register/>},
    {path:"/login",element:<Login/>}

])
export default router;