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

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: '/add-toy', element: <Privet> <AddToy /></Privet> },
            { path: '/toys', element: <Toys />, loader: () => fetch('http://localhost:5000/api/total-toys') },
            { path: '/toy/:id', element: <Details />, loader: ({ params }) => fetch(`http://localhost:5000/api/toy/${params.id}`) }, 
            {path : 'my-toys' , element : <MyToys />}
        ]
    },
]);

export default router;