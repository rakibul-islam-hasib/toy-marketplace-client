import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import Error from "../components/error/Error";
import Login from "../components/user/Login";
import Register from "../components/user/Register";
import AddToy from "../components/actions/AddToy";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> }, 
            {path: '/add-toy', element: <AddToy />},
        ]
    },
]);

export default router;