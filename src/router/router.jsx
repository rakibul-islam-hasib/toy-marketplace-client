import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import Error from "../components/error/Error";
import Login from "../components/user/Login";
import Register from "../components/user/Register";
import AddToy from "../components/actions/AddToy";
import Privet from "./Privet";
import Toys from "../components/pages/Toys/Toys";
import Details from "../components/pages/details/Details";
import MyToys from "../components/user/MyToys";
import Update from "../components/pages/update/Update";
import Blog from "../components/pages/blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: '/add-toy',
                element: <Privet> <AddToy /></Privet>
            },
            {
                path: '/toys',
                element: <Toys />,
                loader: () => fetch('http://localhost:5000/api/total-toys')
            },
            {
                path: '/toy/:id',
                element: <Privet><Details /></Privet>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/toy/${params.id}`)
            },
            {
                path: 'my-toys',
                element: <Privet> <MyToys /></Privet>
            },
            {
                path: '/update/:id',
                element: <Privet><Update /></Privet>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/toy/${params.id}`)
            },
            {
                path : '/blog', 
                element : <Blog />
            }

        ]
    },
]);

export default router;