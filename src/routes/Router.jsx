import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import Register from "../components/Register";
import Login from "../components/Login";
import Home from "../pages/Home";
import JobsDeatils from "../components/JobsDetails";
import JobsDetails from "../components/JobsDetails";
import PrivateRoute from "./PrivateRoute";
import MyApplication from "../components/MyApplication";
import About from "../components/About";
import AddJobs from "../pages/AddJobs";

const router =  createBrowserRouter([
    {path:"/",element:<MainLayout/>,children:[
        {path:"/",element:<Home/>,loader:()=> fetch('http://localhost:5000/jobs')},
        {path:'/addJob',element:<PrivateRoute><AddJobs/></PrivateRoute>},
        {path:"/about",element:<About/>},
        {path:"/my-application",element: <PrivateRoute><MyApplication/></PrivateRoute>,loader:()=> fetch('http://localhost:5000/jobs')},
        {path:"/jobs/:id",element:<PrivateRoute><JobsDetails/></PrivateRoute>  ,loader:({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)},
    ]},
    {path:"/register",element:<Register/>},
    {path:"/login",element:<Login/>},
   

])
export default router;