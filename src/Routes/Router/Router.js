import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home/Home";
import Main from "../../components/Home/Main/Main";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
])
