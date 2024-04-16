import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import Pricing from "./components/Pricing/Pricing";
import  Login  from "./components/Login/Login";

const App = () => {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>

    )
}

const Error = () => {
    return <h1>Error</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const appRouter  = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/pricing",
                element: <Pricing />
            }, 
            {
                path: "/login",
                element: <Login />
            }
        ]
    }

])

root.render(<RouterProvider router={appRouter} />)